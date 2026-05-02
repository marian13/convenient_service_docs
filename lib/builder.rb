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

require_relative 'services/build'

class Builder
  def run
    Services::Build.call(
      uris: urls,
      browser: browser,
      assets: assets,
      pool: pool,
      port: port,
      root: root,
      logger: logger
    )
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

  def src(path = '')
    File.join(root, 'src', path)
  end
end

Builder.new.run
