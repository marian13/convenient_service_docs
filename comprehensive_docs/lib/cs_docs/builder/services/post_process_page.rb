# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class PostProcessPage
        include ::CSDocs::Services::Configs::Practical::V1

        option :content
        option :config

        validates :content, presence: true
        validates :config, presence: true

        step :PrefixInternalLinks,
          out: :content

        private

        def PrefixInternalLinks
          base_path = config.dig(:envs, :build, :base_path).to_s.chomp("/")

          return success(content: content) if base_path.empty?

          success(content: content.gsub(/(href|src)="(\/(?!\/)[^"]*)"/, "\\1=\"#{base_path}\\2\""))
        end
      end
    end
  end
end
