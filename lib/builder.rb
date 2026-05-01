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
    check_network

    remove_folder(dist)
    touch_folder(dist)

    server_pid = spawn("PORT=#{port} bundle exec ruby lib/dev_server.rb", chdir: root)

    wait_server_healthcheck

    build_urls

    save_sitemap
    save_llms_txt

    kill_process(server_pid)

    logger.info('done')
  rescue => e
    if logger.debug?
      logger.error(e.full_message)
    else
      logger.error(e.message)
    end

    exit(1)
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

  def pool
    @pool ||= Concurrent::FixedThreadPool.new(pool_size)
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

  def assets
    @assets ||= Concurrent::Map.new
  end

  def log_level
    @log_level ||= ENV.fetch('LOG_LEVEL', 'info').upcase
  end

  def logger
    @logger ||= Logger.new($stdout, level: log_level)
  end

  def browser
    @browser ||= begin
      browser = Ferrum::Browser.new(timeout: 15, headless: true)

      browser.page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__build__ = true")

      browser
    end
  end

  def check_network
    Net::HTTP.get(URI('https://esm.sh'))
  rescue => e
    raise "Network unavailable — CDN assets will not load: #{e.message}"
  end

  def build_urls
    urls.each { |url| Concurrent::Future.execute(executor: pool) { build_url(url) } }

    pool.shutdown
    pool.wait_for_termination

    browser.quit

    save_assets
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
    page = browser.create_page

    page.go_to(url.to_s)

    page.network.wait_for_idle

    wait(seconds: 5) { page.evaluate("window.__ready__") }

    build_assets(page, url)

    content = <<~HTML
      <!DOCTYPE html>
      #{page.evaluate('document.documentElement.outerHTML')}
    HTML

    page.close

    save_url(url, content)
  end

  def build_assets(page, url)
    page.network.traffic.each { |exchange| build_asset(exchange, url) }
  end

  def build_asset(exchange, url)
    return if exchange.response.nil?

    request_uri = URI.parse(exchange.request.url)

    return if request_uri.host != 'localhost'
    return if exchange.request.url == url.to_s

    assets.put_if_absent(request_uri.path, exchange.response.body)
  end

  def save_assets
    assets.each_pair { |path, body| save_asset(path, body) }
  end

  def save_asset(path, body)
    dist_path = dist(path)

    touch_folder(File.dirname(dist_path))

    File.binwrite(dist_path, body)

    logger.info("saved #{dist_path.delete_prefix("#{root}/")}")
  end

  def save_sitemap
    response = Net::HTTP.get_response(URI("http://localhost:#{port}/sitemap.xml"))

    File.binwrite(dist('sitemap.xml'), response.body)

    logger.info('saved dist/sitemap.xml')
  end

  def save_llms_txt
    response = Net::HTTP.get_response(URI("http://localhost:#{port}/llms.txt"))

    File.binwrite(dist('llms.txt'), response.body)

    logger.info('saved dist/llms.txt')
  end

  def save_url(url, content)
    dist_path =
      if url.path == '/'
        dist('index.html')
      else
        dist(url.path)
      end

    touch_folder(File.dirname(dist_path))

    File.write(dist_path, content)

    logger.info("built #{dist_path.delete_prefix("#{root}/")}")
  end

  def touch_folder(path)
    FileUtils.mkdir_p(path)
  end

  def remove_folder(path)
    FileUtils.rm_rf(path)
  end

  def wait(seconds: 2, &block)
    Retriable.retriable(tries: (seconds / 0.1).ceil, base_interval: 0.1) { raise unless block.call }
  end
end

Builder.new.run
