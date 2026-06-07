# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class SaveAssets
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :assets
        option :root
        option :config
        option :logger

        validates :assets, nil: false
        validates :root, presence: true
        validates :config, presence: true
        validates :logger, presence: true

        def result
          service_aware_enumerator(assets.each_pair)
            .service_aware_each { |uri, body|
              step Services::SaveAsset,
                in: [uri: -> { uri }, body: -> { body }, root: -> { root }, config: -> { config }, logger: -> { logger }]
            }
            .result(evaluate_by: nil)
        end
      end
    end
  end
end
