# frozen_string_literal: true

require "concurrent"

require_relative "configs/practical/v1"
require_relative "build_uri"
require_relative "quit_browser"
require_relative "save_assets"

module Services
  class BuildUrisConcurrently
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

    step :ProcessUris

    step Services::QuitBrowser,
      in: :browser

    step Services::SaveAssets,
      in: [:assets, :root, :logger]

    private

    def ProcessUris
      service_aware_enumerable(uris)
        .map { |uri| Concurrent::Future.execute(executor: pool) { Services::BuildUri.result(uri: uri, browser: browser, assets: assets, root: root, logger: logger) } }
        .lazy
        .service_aware_map { |future| future.value!.tap { |result| pool.kill if result.not_success? } }
        .result
    ensure
      pool.shutdown
      pool.wait_for_termination
    end
  end
end
