# frozen_string_literal: true



module CSDocs
  class Builder
    module Services
      class BuildPagesConcurrently
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
    
        step :ProcessUris
    
        step Services::QuitBrowser,
          in: :browser
    
        step Services::SaveAssets,
          in: [:assets, :root, :logger]
    
        private
    
        def ProcessUris
          service_aware_enumerable(uris)
            .map { |uri| Concurrent::Future.execute(executor: pool) { Services::BuildPage.result(uri: uri, browser: browser, assets: assets, root: root, config: config, logger: logger) } }
            .lazy
            .service_aware_map { |future| future.value!.tap { |result| pool.kill if result.not_success? } }
            .result
        ensure
          pool.shutdown
          pool.wait_for_termination
        end
      end
    end
  end
end
