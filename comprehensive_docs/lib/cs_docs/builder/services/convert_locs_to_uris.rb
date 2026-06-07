# frozen_string_literal: true



module CSDocs
  class Builder
    module Services
      class ConvertLocsToUris
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :locs
        option :port
    
        validates :locs, presence: true
        validates :port, presence: true
    
        def result
          uris = locs.map do |loc|
            uri = URI.parse(loc)
    
            uri.scheme = "http"
            uri.host = "localhost"
            uri.port = port
    
            uri
          end
    
          success(uris: uris)
        end
      end
    end
  end
end
