# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "read_file_content"
require_relative "parse_sitemap_xml"

module Services
  class ResolveLocsFromSitemap
    include Services::Configs::Practical::V1

    option :root

    validates :root, presence: true

    step Services::ReadFileContent,
      in: {path: :sitemap_path},
      out: :content

    step Services::ParseSitemapXml,
      in: :content,
      out: :locs

    step :result,
      in: :locs,
      out: :locs

    private

    memo_wise def sitemap_path
      File.join(root, "src", "sitemap.xml")
    end

    def result
      success(locs: locs)
    end
  end
end
