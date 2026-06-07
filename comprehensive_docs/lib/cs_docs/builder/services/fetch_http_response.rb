# frozen_string_literal: true

require "net/http"
require "uri"

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class FetchHttpResponse
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uri
    
        validates :uri, presence: true
    
        def result
          body = Net::HTTP.get_response(uri).body
    
          success(body: body)
        end
      end
    end
  end
end
