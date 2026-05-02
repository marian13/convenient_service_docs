# frozen_string_literal: true

require "net/http"
require "uri"

require_relative "configs/practical/v1"

module Services
  class FetchHttpResponse
    include Services::Configs::Practical::V1

    option :uri

    validates :uri, presence: true

    def result
      body = Net::HTTP.get_response(uri).body

      success(body: body)
    end
  end
end
