# frozen_string_literal: true

require "retriable"

require_relative "configs/practical/v1"
require_relative "collect_asset"
require_relative "save_url"

module Services
  class BuildUri
    include Services::Configs::Practical::V1

    option :uri
    option :browser
    option :assets
    option :root
    option :logger

    validates :uri, presence: true
    validates :browser, presence: true
    validates :assets, presence: true
    validates :root, presence: true
    validates :logger, presence: true

    def result
      logger.debug { "building #{uri}..." }

      page = browser.create_page

      page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__cs__ = { build: true };")

      page.go_to(uri.to_s)

      page.network.wait_for_idle

      logger.debug { "#{uri} ready status: #{page.evaluate("window.__cs__?.ready?.status").inspect}" }

      wait(seconds: 5) {
        cs = page.evaluate("window.__cs__")
        !cs || !cs['ready'] || %w[completed failed].include?(cs.dig('ready', 'status'))
      }

      ready = page.evaluate("window.__cs__?.['ready']")

      return error(ready['message']) if ready&.dig('status') == 'failed'

      page.network.traffic.each do |exchange|
        Services::CollectAsset.result(exchange: exchange, uri: uri, assets: assets).with_fallback
      end

      content = <<~HTML
        <!DOCTYPE html>
        #{page.evaluate('document.documentElement.outerHTML')}
      HTML

      page.close

      Services::SaveUrl.call(uri: uri, content: content, root: root, logger: logger)
    end

    private

    def wait(seconds: 2, &block)
      Retriable.retriable(tries: (seconds / 0.1).ceil, base_interval: 0.1, multiplier: 1.0) { raise unless block.call }
    end
  end
end
