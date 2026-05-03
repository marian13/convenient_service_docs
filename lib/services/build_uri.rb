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

    step :CreateBrowserPage,
      out: :page

    step :InjectBuildScript,
      in: :page

    step :NavigateToUri,
      in: :page

    step :WaitForIslandsToBeReady,
      in: :page

    step :CollectAssets,
      in: :page

    step :CapturePageContent,
      in: :page,
      out: :content

    step :CloseBrowserPage,
      in: :page

    step Services::SaveUrl,
      in: [:uri, :content, :root, :logger]

    before :result do
      logger.debug { "building #{uri}..." }
    end

    private

    def CreateBrowserPage
      success(page: browser.create_page)
    end

    def InjectBuildScript
      page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__cs__ = { build: true };")

      success
    end

    def NavigateToUri
      page.go_to(uri.to_s)

      page.network.wait_for_idle

      success
    end

    def WaitForIslandsToBeReady
      logger.debug { "#{uri} ready status: #{page.evaluate("window.__cs__?.ready?.status").inspect}" }

      wait(seconds: 5) {
        cs = page.evaluate("window.__cs__")
        !cs || !cs['ready'] || %w[completed failed].include?(cs.dig('ready', 'status'))
      }

      ready = page.evaluate("window.__cs__?.['ready']")

      return error(ready['message']) if ready&.dig('status') == 'failed'

      success
    end

    def CollectAssets
      service_aware_enumerable(page.network.traffic)
        .service_aware_each { |exchange|
          step Services::CollectAsset,
            in: [exchange: -> { exchange }, uri: -> { uri }, assets: -> { assets }],
            fallback: true
        }
        .result
    end

    def CapturePageContent
      content = <<~HTML
        <!DOCTYPE html>
        #{page.evaluate('document.documentElement.outerHTML')}
      HTML

      success(content: content)
    end

    def CloseBrowserPage
      page.close

      success
    end

    def wait(seconds: 2, &block)
      Retriable.retriable(tries: (seconds / 0.1).ceil, base_interval: 0.1, multiplier: 1.0) { raise unless block.call }
    end
  end
end
