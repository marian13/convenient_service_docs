# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/collect_asset"
require "cs_docs/builder/services/post_process_page"
require "cs_docs/builder/services/save_page"

module CSDocs
  class Builder
    module Services
      class BuildPage
        include ::CSDocs::Services::Configs::Practical::V1

        option :uri
        option :browser
        option :assets
        option :root
        option :config
        option :logger

        validates :uri, presence: true
        validates :browser, presence: true
        validates :assets, nil: false
        validates :root, presence: true
        validates :config, presence: true
        validates :logger, presence: true

        step :CreateBrowserPage,
          out: [:page, :console_errors]

        step :InjectBuildScript,
          in: :page

        step :NavigateToUri,
          in: :page

        step :CheckNetworkResponses,
          in: :page

        step :CheckConsoleErrors,
          in: :console_errors

        step :CollectAssets,
          in: :page

        step :MarkAsPrerenderedOnBuild,
          in: :page

        step :CapturePageContent,
          in: :page,
          out: :content

        step :CloseBrowserPage,
          in: :page

        step Services::PostProcessPage,
          in: [:content, :config],
          out: :content

        step Services::SavePage,
          in: [:uri, :content, :root, :logger]

        before :result do
          logger.debug { "building #{uri}..." }
        end

        private

        def CreateBrowserPage
          console_errors = []

          page = browser.create_page

          page.on("Runtime.consoleAPICalled") do |params|
            next if params["type"] != "error"

            console_errors << params["args"].map { |a| a["value"] || a["description"] }.compact.join(" ")
          end

          success(page: page, console_errors: console_errors)
        rescue => e
          error_from_exception(e)
        end

        def InjectBuildScript
          page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__cs__ = { build: true };")

          success
        end

        def NavigateToUri
          page.go_to(uri.to_s)

          page.network.wait_for_idle

          sleep(2)

          page.network.wait_for_idle

          success
        rescue => e
          error_from_exception(e)
        end

        def CheckNetworkResponses
          failed = page.network.traffic.select { |exchange| exchange.response&.status.to_i >= 400 }

          return error("Non-2xx responses for #{uri}:\n#{failed.map { |e| "#{e.url} → #{e.response.status}" }.join("\n")}") if failed.any?

          success
        end

        def CheckConsoleErrors
          return error("Console errors for #{uri}:\n#{console_errors.join("\n")}") if console_errors.any?

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

        def MarkAsPrerenderedOnBuild
          page.evaluate(<<~JS)
            document
              .querySelectorAll('cs-react-island[prerender-on-build]')
              .forEach(el => {
                el.removeAttribute('prerender-on-build');
                el.setAttribute('prerendered-on-build', '');
              });
          JS

          success
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
      end
    end
  end
end
