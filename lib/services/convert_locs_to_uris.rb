# frozen_string_literal: true

require "uri"

require_relative "configs/practical/v1"

module Services
  class ConvertLocsToUris
    include Services::Configs::Practical::V1

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
