# frozen_string_literal: true

require "net/http"
require "uri"
require "retriable"

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class WaitServerHealthcheck
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :port
    
        validates :port, presence: true
    
        def result
          Retriable.retriable(tries: 20, base_interval: 0.1, multiplier: 1.0) do
            Net::HTTP.get(URI("http://localhost:#{port}/healthcheck"))
          end
    
          success
        end
      end
    end
  end
end
