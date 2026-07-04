# frozen_string_literal: true

module CSDocs
  class DevServer < Sinatra::Base
    class GenerateWebToc
      include ::CSDocs::Services::Configs::Practical::V1

      option :request

      validates :request, presence: true

      step LoadTocConfig,
        out: :toc_config

      step :result,
        in: [:toc_config, :request],
        out: :toc

      def result
        return failure if request.params['source'] != 'web'

        success(toc: render_section(toc_config[:toc][:items], [], 2).join("\n"))
      end

      private

      def render_section(items, counters, heading_level)
        lines = []

        items.each_with_index do |item, i|
          num = counters + [i + 1]
          prefix = num.join('.')
          title = item[:title]
          href = item[:link] || item[:url]
          sub = item[:items]
          level = num.length

          label = href ? "<a href=\"#{href}\">#{title}</a>" : title
          lines << "<div class=\"cs-toc-level-#{level}\"><span class=\"cs-toc-num-#{level}\">#{prefix}.</span> #{label}</div>"
          lines.concat(render_section(sub, num, heading_level + 1)) if sub
        end

        lines
      end
    end
  end
end
