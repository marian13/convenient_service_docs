# frozen_string_literal: true



module CSDocs
  class Builder
    module Services
      class ParseSitemapXml
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :content
    
        validates :content, presence: true
    
        def result
          doc = REXML::Document.new(content)
    
          locs = doc.elements.collect("urlset/url/loc", &:text)
    
          success(locs: locs)
        end
      end
    end
  end
end
