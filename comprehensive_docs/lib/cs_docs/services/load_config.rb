# frozen_string_literal: true

require "yaml"
require "cs_docs/services/configs/practical/v1"

module CSDocs
  module Services
    class LoadConfig
      include ::CSDocs::Services::Configs::Practical::V1

      option :root

      validates :root, presence: true

      def result
        success(config: YAML.load_file(File.join(root, "config.yml"), symbolize_names: true))
      end
    end
  end
end
