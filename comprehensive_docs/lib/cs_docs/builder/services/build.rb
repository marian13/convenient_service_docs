# frozen_string_literal: true



module CSDocs
  class Builder
    module Services
      class Build
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :root, default: proc { File.expand_path("../../../..", __dir__) }
        option :config, default: proc { ::CSDocs::Services::LoadConfig.call[:config] }
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
    
        step Services::BuildPages,
          in: [:uris, :browser, :assets, :pool, :root, :config, :logger]
    
        step Services::SaveSitemap,
          in: [:port, :root, :logger]

        step Services::PostProcessSitemap,
          in: [:root, :config]
    
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
