# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/build_uris_sequentially"
require "cs_docs/builder/services/build_uris_concurrently"

module CSDocs
  class Builder
    module Services
      class BuildUris
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uris
        option :browser
        option :assets
        option :pool
        option :root
        option :logger
    
        validates :uris, presence: true
        validates :browser, presence: true
        validates :assets, nil: false
        validates :pool, presence: true
        validates :root, presence: true
        validates :logger, presence: true
    
        step Services::BuildUrisSequentially,
          in: [:uris, :browser, :assets, :root, :logger]
    
        or_step Services::BuildUrisConcurrently,
          in: [:uris, :browser, :assets, :pool, :root, :logger]
      end
    end
  end
end
