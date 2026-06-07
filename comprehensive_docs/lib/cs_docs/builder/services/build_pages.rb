# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/build_pages_sequentially"
require "cs_docs/builder/services/build_pages_concurrently"

module CSDocs
  class Builder
    module Services
      class BuildPages
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uris
        option :browser
        option :assets
        option :pool
        option :root
        option :config
        option :logger

        validates :uris, presence: true
        validates :browser, presence: true
        validates :assets, nil: false
        validates :pool, presence: true
        validates :root, presence: true
        validates :config, presence: true
        validates :logger, presence: true

        step Services::BuildPagesSequentially,
          in: [:uris, :browser, :assets, :root, :config, :logger]

        or_step Services::BuildPagesConcurrently,
          in: [:uris, :browser, :assets, :pool, :root, :config, :logger]
      end
    end
  end
end
