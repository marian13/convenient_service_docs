# frozen_string_literal: true

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
