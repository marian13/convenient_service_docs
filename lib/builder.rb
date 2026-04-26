# frozen_string_literal: true

require 'ferrum'
require 'concurrent'
require 'logger'
require 'retriable'
require 'rexml/document'
require 'fileutils'
require 'socket'
require 'net/http'
require 'uri'

class Builder
  def run
    remove_folder(dist)

    server_pid = spawn("PORT=#{port} bundle exec ruby lib/dev_server.rb", chdir: root)

    wait_server_healthcheck

    build_urls

    touch_folder(dist('src'))
    copy_folder(src('docs'), dist('docs'))
    copy_folder(src('components'), dist('src/components'))
    copy_folder(src('global'), dist('src/global'))
    copy_folder(src('utils'), dist('src/utils'))
    copy_folder(src('public'), dist('public'))

    copy_partial_styles

    copy_file(src('sitemap.xml'), dist('sitemap.xml'))

    kill_process(server_pid)

    logger.info('done')
  end

  private

  def root
    @root ||= File.expand_path('..', __dir__)
  end

  def port
    @port ||= begin
      server = TCPServer.new('127.0.0.1', 0)
      port = server.addr[1]
      server.close
      port
    end
  end

  def pool_size
    @pool_size ||= 8
  end

  def locs
    @locs ||= if ARGV.any?
      ARGV
    else
      doc = REXML::Document.new(File.read(src('sitemap.xml')))
      doc.elements.collect('urlset/url/loc', &:text)
    end
  end

  def urls
    @urls ||= locs.map do |loc|
      uri = URI.parse(loc)
      uri.scheme = 'http'
      uri.host = 'localhost'
      uri.port = port
      uri
    end
  end

  def dynamic_urls
    @dynamic_urls ||= urls.reject { |url| url.path.end_with?('.md') }
  end

  def logger
    @logger ||= Logger.new($stdout)
  end

  def build_urls
    pool = Concurrent::FixedThreadPool.new(pool_size)

    dynamic_urls.each { |url| Concurrent::Future.execute(executor: pool) { build_url(url) } }

    pool.shutdown
    pool.wait_for_termination
  end

  def copy_partial_styles
    Dir.glob(src('views/partials/**/*.css')).each do |css_file|
      dest = css_file.sub(src, dist)
      touch_folder(File.dirname(dest))
      copy_file(css_file, dest)
    end
  end

  def wait_server_healthcheck
    wait { Net::HTTP.get(URI("http://localhost:#{port}/healthcheck")) }
  end

  def kill_process(pid)
    Process.kill('TERM', pid)
    Process.wait(pid)
  end

  def src(path = '')
    File.join(root, 'src', path)
  end

  def dist(path = '')
    File.join(root, 'dist', path)
  end

  def build_url(url)
    save_url(url, fetch_url(url))
  end

  def fetch_url(url)
    browser = Ferrum::Browser.new(timeout: 15, headless: true)

    browser.page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__build__ = true")
    browser.goto(url.to_s)
    browser.network.wait_for_idle

    wait(seconds: 5) { browser.evaluate("window.__ready__") }

    content = <<~HTML
      <!DOCTYPE html>
      #{browser.evaluate('document.documentElement.outerHTML')}
    HTML

    browser.quit

    content
  end

  def save_url(url, content)
    dist_path =
      if url.path == '/'
        dist('index.html')
      elsif url.path.end_with?('.html')
        dist(url.path)
      else
        dist(File.join(url.path.chomp('/'), 'index.html'))
      end

    touch_folder(File.dirname(dist_path))

    File.write(dist_path, content)

    logger.info("built #{dist_path.delete_prefix("#{root}/")}")
  end

  def touch_folder(path)
    FileUtils.mkdir_p(path)
  end

  def copy_file(src, dest)
    FileUtils.cp(src, dest)
  end

  def copy_folder(src, dest)
    FileUtils.cp_r(src, dest, remove_destination: true)
  end

  def remove_folder(path)
    FileUtils.rm_rf(path)
  end

  def wait(seconds: 2, &block)
    Retriable.retriable(tries: (seconds / 0.1).ceil, base_interval: 0.1) { raise unless block.call }
  end
end

Builder.new.run
