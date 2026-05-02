# frozen_string_literal: true

require 'concurrent'
require 'debug'
require 'ferrum'
require 'fileutils'
require 'logger'
require 'net/http'
require 'retriable'
require 'rexml/document'
require 'socket'
require 'uri'

require_relative 'services/check_network'
require_relative 'services/remove_folder'
require_relative 'services/touch_folder'
require_relative 'services/spawn_dev_server'
require_relative 'services/wait_server_healthcheck'
require_relative 'services/save_url'
require_relative 'services/save_asset'

class Builder
  def run
    Services::CheckNetwork.call(logger: logger)

    Services::RemoveFolder.call(path: dist)
    Services::TouchFolder.call(path: dist)

    server_pid = Services::SpawnDevServer.call(port: port, root: root)[:pid]

    Services::WaitServerHealthcheck.call(port: port)

    build_uris

    save_sitemap
    save_llms_txt

    kill_process(server_pid)

    logger.info { 'done' }
  rescue => e
    logger.error { e.class }
    logger.error { e.message }
    logger.debug { e.full_message }

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
      options = { timeout: 15, headless: true }
      # options[:logger] = $stdout if logger.debug?

      Ferrum::Browser.new(**options)
    end
  end

  def build_uris
    browser

    if sequential?
      urls.each do |url|
        build_uri(url)
      rescue => e
        logger.error { "#{url}: #{e.class}: #{e.message}" }
        logger.debug { e.full_message }
        raise
      end
    else
      futures = urls.map do |url|
        Concurrent::Future.execute(executor: pool) do
          build_uri(url)
        rescue => e
          logger.error { "#{url}: #{e.class}: #{e.message}" }
          logger.debug { e.full_message }
          raise
        end
      end

      pool.shutdown
      pool.wait_for_termination

      futures.each(&:value!)
    end

    browser.quit

    save_assets
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

  def build_uri(uri)
    logger.debug { "building #{uri}..." }

    page = browser.create_page

    page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__cs__ = { build: true };")

    page.go_to(uri.to_s)

    page.network.wait_for_idle

    logger.debug { "#{uri} ready status: #{page.evaluate("window.__cs__?.ready?.status").inspect}" }

    wait(seconds: 5) {
      cs = page.evaluate("window.__cs__")
      !cs || !cs['ready'] || %w[completed failed].include?(cs.dig('ready', 'status'))
    }

    ready = page.evaluate("window.__cs__?.['ready']")

    raise ready['message'] if ready&.dig('status') == 'failed'

    build_assets(page, uri)

    content = <<~HTML
      <!DOCTYPE html>
      #{page.evaluate('document.documentElement.outerHTML')}
    HTML

    page.close

    Services::SaveUrl.call(uri: uri, content: content, root: root, logger: logger)
  end

  def build_assets(page, uri)
    page.network.traffic.each { |exchange| build_asset(exchange, uri) }
  end

  def build_asset(exchange, uri)
    return if exchange.response.nil?

    request_uri = URI.parse(exchange.request.url)

    return if request_uri.host != 'localhost'
    return if exchange.request.url == uri.to_s

    assets.put_if_absent(request_uri, exchange.response.body)
  end

  def save_assets
    assets.each_pair do |uri, body|
      Services::SaveAsset.call(uri: uri, body: body, root: root, logger: logger)
    end
  end

  def save_sitemap
    response = Net::HTTP.get_response(URI("http://localhost:#{port}/sitemap.xml"))

    File.binwrite(dist('sitemap.xml'), response.body)

    logger.info { 'saved dist/sitemap.xml' }
  end

  def save_llms_txt
    response = Net::HTTP.get_response(URI("http://localhost:#{port}/llms.txt"))

    File.binwrite(dist('llms.txt'), response.body)

    logger.info { 'saved dist/llms.txt' }
  end

  def sequential?
    ENV['SEQUENTIAL'] == '1'
  end

  def wait(seconds: 2, &block)
    Retriable.retriable(tries: (seconds / 0.1).ceil, base_interval: 0.1, multiplier: 1.0) { raise unless block.call }
  end
end

Builder.new.run
