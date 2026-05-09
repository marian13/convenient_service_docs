# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/build_uri"
require "cs_docs/builder/services/quit_browser"
require "cs_docs/builder/services/save_assets"

module CSDocs
  class Builder
    module Services
      class BuildUrisSequentially
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uris
        option :browser
        option :assets
        option :root
        option :logger
    
        validates :uris, presence: true
        validates :browser, presence: true
        validates :assets, nil: false
        validates :root, presence: true
        validates :logger, presence: true
    
        step :ProcessUris
    
        step Services::QuitBrowser,
          in: :browser
    
        step Services::SaveAssets,
          in: [:assets, :root, :logger]
    
        private
    
        def ProcessUris
          return failure("not in sequential mode") unless sequential?
    
          service_aware_enumerable(uris)
            .service_aware_each { |uri|
              step Services::BuildUri,
                in: [uri: -> { uri }, browser: -> { browser }, assets: -> { assets }, root: -> { root }, logger: -> { logger }]
            }
            .result
        end
    
        def sequential?
          ENV["SEQUENTIAL"] == "1"
        end
      end
    end
  end
end
