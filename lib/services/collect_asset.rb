# frozen_string_literal: true

require "uri"

require_relative "configs/practical/v1"

module Services
  class CollectAsset
    include Services::Configs::Practical::V1

    option :exchange
    option :uri
    option :assets

    validates :exchange, presence: true
    validates :uri, presence: true
    validates :assets, presence: true

    def result
      return failure("Exchange has no response") if exchange.response.nil?
      return failure("Exchange is not from localhost") if request_uri.host != "localhost"
      return failure("Exchange is the page itself, not an asset") if exchange.request.url == uri.to_s

      assets.put_if_absent(request_uri, exchange.response.body)

      success
    end

    def fallback_result
      success
    end

    private

    memoize def request_uri
      URI.parse(exchange.request.url)
    end
  end
end
