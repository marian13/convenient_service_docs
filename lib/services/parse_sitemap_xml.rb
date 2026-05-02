# frozen_string_literal: true

require "rexml/document"

require_relative "configs/practical/v1"

module Services
  class ParseSitemapXml
    include Services::Configs::Practical::V1

    option :content

    validates :content, presence: true

    def result
      doc = REXML::Document.new(content)

      locs = doc.elements.collect("urlset/url/loc", &:text)

      success(locs: locs)
    end
  end
end
