# frozen_string_literal: true

module CSDocs
  class Builder
    module Services
      class PostProcessSitemap
        include ::CSDocs::Services::Configs::Practical::V1

        option :root
        option :config

        validates :root, presence: true
        validates :config, presence: true

        step :PrefixSitemapLocs

        private

        def PrefixSitemapLocs
          base_path = config[:base_path]

          return success if base_path.empty?

          path = File.join(root, "dist", "sitemap.xml")
          content = File.read(path)

          File.write(path, content.gsub(%r{(<loc>https?://[^/]+)(/)}, "\\1#{base_path}/"))

          success
        end
      end
    end
  end
end
