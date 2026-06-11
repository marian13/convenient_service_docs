# frozen_string_literal: true

module CSDocs
  module Services
    class LoadConfig
      include ::CSDocs::Services::Configs::Practical::V1

      step ::CSDocs::Services::GetRoot,
        out: :root

      step :result,
        out: :config

      def result
        config = YAML.load_file(File.join(root, "config.yml"), symbolize_names: true)

        config[:base_url] = config[:base_url].to_s.chomp("/")
        config[:base_path] = config[:base_path].to_s.chomp("/")

        success(config: config)
      end
    end
  end
end
