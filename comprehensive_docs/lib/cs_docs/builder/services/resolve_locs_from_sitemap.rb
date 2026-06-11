# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class ResolveLocsFromSitemap
        include ::CSDocs::Services::Configs::Practical::V1
    
        step ::CSDocs::Services::GenerateSitemap,
          out: {sitemap_xml: :content}

        step Services::ParseSitemapXml,
          in: :content,
          out: :locs

        step :result,
          in: :locs,
          out: :locs

        private

        def result
          success(locs: locs)
        end
      end
    end
  end
end
