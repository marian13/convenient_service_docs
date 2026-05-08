# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "save_asset"

module Services
  class SaveAssets
    include Services::Configs::Practical::V1

    option :assets
    option :root
    option :logger

    validates :assets, nil: false
    validates :root, presence: true
    validates :logger, presence: true

    def result
      service_aware_enumerator(assets.each_pair)
        .service_aware_each { |uri, body|
          step Services::SaveAsset,
            in: [uri: -> { uri }, body: -> { body }, root: -> { root }, logger: -> { logger }]
        }
        .result(evaluate_by: nil)
    end
  end
end
