# frozen_string_literal: true

require "uri"

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/fetch_http_response"
require "cs_docs/builder/services/write_binary_file"

module CSDocs
  class Builder
    module Services
      class SaveSitemap
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :port
        option :root
        option :logger
    
        validates :port, presence: true
        validates :root, presence: true
        validates :logger, presence: true
    
        step Services::FetchHttpResponse,
          in: {uri: :source_uri},
          out: :body
    
        step Services::WriteBinaryFile,
          in: [{path: :dist_path}, {content: :body}]
    
        after :result do |result|
          logger.info { "saved dist/sitemap.xml" } if result.success?
        end
    
        private
    
        memo_wise def source_uri
          URI("http://localhost:#{port}/sitemap.xml")
        end
    
        memo_wise def dist_path
          File.join(root, "dist", "sitemap.xml")
        end
      end
    end
  end
end
