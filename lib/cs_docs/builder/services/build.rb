# frozen_string_literal: true

require "concurrent"
require "ferrum"
require "logger"

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/check_network"
require "cs_docs/builder/services/find_free_port"
require "cs_docs/builder/services/resolve_locs"
require "cs_docs/builder/services/convert_locs_to_uris"
require "cs_docs/builder/services/remove_folder"
require "cs_docs/builder/services/touch_folder"
require "cs_docs/builder/services/spawn_dev_server"
require "cs_docs/builder/services/wait_server_healthcheck"
require "cs_docs/builder/services/build_uris"
require "cs_docs/builder/services/save_sitemap"
require "cs_docs/builder/services/save_llms_txt"
require "cs_docs/builder/services/kill_process"

module CSDocs
  class Builder
    module Services
      class Build
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :root, default: proc { File.expand_path("../../../..", __dir__) }
        option :logger, default: proc { Logger.new($stdout, level: ENV.fetch("LOG_LEVEL", "info").upcase) }
        option :browser, default: proc { Ferrum::Browser.new(timeout: 15, headless: true) }
        option :pool, default: proc { Concurrent::FixedThreadPool.new(8) }
        option :assets, default: proc { Concurrent::Map.new }
    
        step Services::CheckNetwork,
          in: :logger
    
        step Services::FindFreePort,
          out: :port
    
        step Services::ResolveLocs,
          in: :root,
          out: :locs
    
        step Services::ConvertLocsToUris,
          in: [:locs, :port],
          out: :uris
    
        step Services::RemoveFolder,
          in: {path: :dist_path}
    
        step Services::TouchFolder,
          in: {path: :dist_path}
    
        step Services::SpawnDevServer,
          in: [:port, :root],
          out: :pid
    
        step Services::WaitServerHealthcheck,
          in: :port
    
        step Services::BuildUris,
          in: [:uris, :browser, :assets, :pool, :root, :logger]
    
        step Services::SaveSitemap,
          in: [:port, :root, :logger]
    
        step Services::SaveLlmsTxt,
          in: [:port, :root, :logger]
    
        step Services::KillProcess,
          in: :pid
    
        after :result do |result|
          logger.info { "done" } if result.success?
        end
    
        private
    
        memo_wise def dist_path
          File.join(root, "dist")
        end
      end
    end
  end
end
