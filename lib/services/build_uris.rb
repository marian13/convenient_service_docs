# frozen_string_literal: true

require "concurrent"

require_relative "configs/practical/v1"
require_relative "build_uri"
require_relative "save_asset"

module Services
  class BuildUris
    include Services::Configs::Practical::V1

    option :uris
    option :browser
    option :assets
    option :pool
    option :root
    option :logger

    validates :uris, presence: true
    validates :browser, presence: true
    validates :assets, presence: true
    validates :pool, presence: true
    validates :root, presence: true
    validates :logger, presence: true

    def result
      if sequential?
        uris.each do |uri|
          Services::BuildUri.call(uri: uri, browser: browser, assets: assets, root: root, logger: logger)
        rescue => e
          logger.error { "#{uri}: #{e.class}: #{e.message}" }
          logger.debug { e.full_message }
          raise
        end
      else
        futures = uris.map do |uri|
          Concurrent::Future.execute(executor: pool) do
            Services::BuildUri.call(uri: uri, browser: browser, assets: assets, root: root, logger: logger)
          rescue => e
            logger.error { "#{uri}: #{e.class}: #{e.message}" }
            logger.debug { e.full_message }
            raise
          end
        end

        pool.shutdown
        pool.wait_for_termination

        futures.each(&:value!)
      end

      browser.quit

      assets.each_pair do |uri, body|
        Services::SaveAsset.call(uri: uri, body: body, root: root, logger: logger)
      end

      success
    end

    private

    def sequential?
      ENV['SEQUENTIAL'] == '1'
    end
  end
end
