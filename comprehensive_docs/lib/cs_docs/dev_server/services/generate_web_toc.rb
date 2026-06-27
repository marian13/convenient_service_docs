# frozen_string_literal: true

module CSDocs
  class DevServer < Sinatra::Base
    class GenerateWebToc
      include ::CSDocs::Services::Configs::Practical::V1

      option :request

      validates :request, presence: true

      step LoadTocData,
        out: :toc_data

      step :result,
        in: [:toc_data, :request],
        out: :toc

      def result
        return failure if request.params['source'] != 'web'

        success(toc: render_section(toc_data[:toc][:items], [], 2).join("\n"))
      end

      private

      def render_section(items, counters, heading_level)
        lines = []
        had_bullets = false

        items.each_with_index do |item, i|
          num = counters + [i + 1]
          prefix = num.join('.')
          title = item[:title]
          href = item[:link] || item[:url]
          sub = item[:items]

          if sub || heading_level <= 3
            hashes = '#' * heading_level
            label = href ? "#{prefix}. [#{title}](#{href})" : "#{prefix}. #{title}"
            lines << "#{hashes} #{label}"
            lines << ''
            lines.concat(render_section(sub, num, heading_level + 1)) if sub
          else
            lines << (href ? "#{prefix}. [#{title}](#{href})" : "#{prefix}. #{title}")
            lines << "<br>"
            had_bullets = true
          end
        end

        lines << '' if had_bullets
        lines
      end
    end
  end
end
