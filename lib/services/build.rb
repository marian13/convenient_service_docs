# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "check_network"
require_relative "find_free_port"
require_relative "resolve_locs"
require_relative "convert_locs_to_uris"
require_relative "remove_folder"
require_relative "touch_folder"
require_relative "spawn_dev_server"
require_relative "wait_server_healthcheck"
require_relative "build_uris"
require_relative "save_sitemap"
require_relative "save_llms_txt"
require_relative "kill_process"

module Services
  class Build
    include Services::Configs::Practical::V1

    option :browser
    option :assets
    option :pool
    option :root
    option :logger

    validates :browser, presence: true
    validates :assets, presence: true
    validates :pool, presence: true
    validates :root, presence: true
    validates :logger, presence: true

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

    memoize def dist_path
      File.join(root, "dist")
    end
  end
end
