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

          doc = Nokogiri::HTML5(content)

          doc.css("[href^='/']").each { |node| node["href"] = "#{base_path}#{node["href"]}" }
          doc.css("[src^='/']").each  { |node| node["src"]  = "#{base_path}#{node["src"]}" }

          doc.css("style").each do |node|
            node.content = node.content.gsub(/@import "\//, "@import \"#{base_path}/")
          end

          doc.css("script[type='importmap']").each do |node|
            node.content = node.content.gsub(/: "\//, ": \"#{base_path}/")
          end

          success(content: doc.to_html)
        end
      end
    end
  end
end
