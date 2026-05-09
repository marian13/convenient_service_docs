# frozen_string_literal: true

require "net/http"
require "uri"

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class CheckNetwork
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :logger
    
        validates :logger, presence: true
    
        def result
          logger.debug { 'checking network...' }
    
          Net::HTTP.get(URI("https://esm.sh"))
    
          logger.debug { 'network ok' }
    
          success
        rescue => e
          error("Network unavailable — CDN assets will not load: #{e.message}")
        end
      end
    end
  end
end
