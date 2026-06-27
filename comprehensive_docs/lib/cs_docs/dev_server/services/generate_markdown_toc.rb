# frozen_string_literal: true

module CSDocs
  class DevServer < Sinatra::Base
    class GenerateMarkdownToc
      include ::CSDocs::Services::Configs::Practical::V1

      option :request

      validates :request, presence: true

      step LoadTocConfig,
        out: :toc_config

      step :result,
        in: [:toc_config, :request],
        out: :toc

      def result
        return failure if request.params['source'] != 'markdown'

        success(toc: render_section(toc_config[:toc][:items], 0).join("\n"))
      end

      private

      def render_section(items, depth, counters = [])
        lines = []
        indent = '  ' * depth

        items.each_with_index do |item, i|
          num = counters + [i + 1]
          title = item[:title]
          href = item[:link] || item[:url]
          sub = item[:items]

          label = href ? "[#{title}](#{href})" : title
          lines << "#{indent}- #{num.join('.')}. #{label}"
          lines.concat(render_section(sub, depth + 1, num)) if sub
        end

        lines
      end
    end
  end
end
