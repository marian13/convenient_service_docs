# frozen_string_literal: true

require 'erb'
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
    touch_folder(dist)

    server_pid = spawn("PORT=#{port} bundle exec ruby lib/dev_server.rb", chdir: root)

    wait_server_healthcheck

    copy_folder(src('components'), dist('components'))
    copy_folder(src('global'), dist('global'))
    render_js_erb(src('global/loaders/beforePageLoadStarted.js.erb'), dist('global/loaders/beforePageLoadStarted.js'))
    FileUtils.rm(dist('global/loaders/beforePageLoadStarted.js.erb'))
    copy_folder(src('utils'), dist('utils'))
    copy_folder(src('public'), dist('public'))

    copy_files(src('pages'),  dist('pages'), pattern: '**/*.css')
    copy_files(src('docs'), dist('docs'), pattern: '**/*.md')
    copy_files(src('views/partials'), dist('views/partials'), pattern: '**/*.css')

    copy_file(src('sitemap.xml'), dist('sitemap.xml'))

    build_urls

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

  def browser
    @browser ||= begin
      browser = Ferrum::Browser.new(timeout: 15, headless: true)

      browser.page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__build__ = true")

      browser
    end
  end

  def build_urls
    pool = Concurrent::FixedThreadPool.new(pool_size)

    dynamic_urls.each { |url| Concurrent::Future.execute(executor: pool) { build_url(url) } }

    pool.shutdown
    pool.wait_for_termination

    browser.quit
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
    page = browser.create_page

    page.go_to(url.to_s)
    page.network.wait_for_idle

    wait(seconds: 5) { page.evaluate("window.__ready__") }

    content = <<~HTML
      <!DOCTYPE html>
      #{page.evaluate('document.documentElement.outerHTML')}
    HTML

    page.close

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
    FileUtils.cp_r(src, dest)
  end

  def copy_files(src, dest, pattern:)
    Dir.glob(File.join(src, pattern)).each do |file|
      target = file.sub(src, dest)

      touch_folder(File.dirname(target))

      copy_file(file, target)
    end
  end

  def render_js_module_inline(file_path)
    File.read(file_path).gsub(/^export /, '')
  end

  def render_js_erb(src_path, dest_path)
    File.write(dest_path, ERB.new(File.read(src_path)).result(binding))
  end

  def remove_folder(path)
    FileUtils.rm_rf(path)
  end

  def wait(seconds: 2, &block)
    Retriable.retriable(tries: (seconds / 0.1).ceil, base_interval: 0.1) { raise unless block.call }
  end
end

Builder.new.run
