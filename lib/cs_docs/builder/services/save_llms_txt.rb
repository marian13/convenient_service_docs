# frozen_string_literal: true

require "uri"

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/fetch_http_response"
require "cs_docs/builder/services/write_binary_file"

module CSDocs
  class Builder
    module Services
      class SaveLlmsTxt
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
          logger.info { "saved dist/llms.txt" } if result.success?
        end
    
        private
    
        memo_wise def source_uri
          URI("http://localhost:#{port}/llms.txt")
        end
    
        memo_wise def dist_path
          File.join(root, "dist", "llms.txt")
        end
      end
    end
  end
end
