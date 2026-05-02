# frozen_string_literal: true

require 'concurrent'
require 'debug'
require 'ferrum'
require 'fileutils'
require 'logger'
require 'net/http'
require 'retriable'

require_relative 'services/build'

class Builder
  def run
    Services::Build.call(
      browser: browser,
      assets: assets,
      pool: pool,
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

  def pool_size
    @pool_size ||= 8
  end

  def pool
    @pool ||= Concurrent::FixedThreadPool.new(pool_size)
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
end

Builder.new.run
