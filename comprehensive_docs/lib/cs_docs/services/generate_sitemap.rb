# frozen_string_literal: true

module CSDocs
  module Services
    class GenerateSitemap
      include ::CSDocs::Services::Configs::Practical::V1

      step ::CSDocs::Services::GetRoot,
        out: :root

      step ::CSDocs::Services::LoadConfig,
        out: :config

      step :CollectDocPageLocs,
        out: :doc_page_locs

      step :CollectCustomPageLocs,
        out: :custom_page_locs

      step :CollectLocs,
        in: [:doc_page_locs, :custom_page_locs],
        out: :locs

      step :result,
        in: :locs,
        out: :sitemap_xml

      private

      memo_wise def base_url
        config[:base_url]
      end

      def CollectDocPageLocs
        doc_page_locs = Dir.glob(File.join(root, "src/doc_pages/**/*.md")).sort.map do |file_path|
          relative = file_path.delete_prefix(File.join(root, "src/doc_pages/"))
          "#{base_url}/docs/#{relative.delete_suffix(".md")}.html"
        end

        success(doc_page_locs: doc_page_locs)
      end

      def CollectCustomPageLocs
        custom_page_locs = Dir.glob(File.join(root, "src/custom_pages/**/index.html*")).sort.map do |file_path|
          folder = File.basename(File.dirname(file_path))
          folder == "home" ? "#{base_url}/" : "#{base_url}/#{folder}.html"
        end

        success(custom_page_locs: custom_page_locs)
      end

      def CollectLocs
        success(locs: [*custom_page_locs, *doc_page_locs, "#{base_url}/404.html"])
      end

      def result
        url_entries = locs.map { |loc| "  <url><loc>#{loc}</loc></url>" }.join("\n")

        sitemap_xml = <<~XML
          <?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          #{url_entries}
          </urlset>
        XML

        success(sitemap_xml: sitemap_xml.strip)
      end
    end
  end
end
