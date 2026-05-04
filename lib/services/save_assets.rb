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
      assets.each_pair do |uri, body|
        Services::SaveAsset.call(uri: uri, body: body, root: root, logger: logger)
      end

      success
    end
  end
end
