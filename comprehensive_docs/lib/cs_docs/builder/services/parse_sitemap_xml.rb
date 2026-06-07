# frozen_string_literal: true

require "rexml/document"

require "cs_docs/services/configs/practical/v1"

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
