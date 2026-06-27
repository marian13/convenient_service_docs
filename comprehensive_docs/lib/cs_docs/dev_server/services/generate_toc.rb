# frozen_string_literal: true

module CSDocs
  class DevServer < Sinatra::Base
    class GenerateToc
      include ::CSDocs::Services::Configs::Practical::V1

      option :request

      validates :request, presence: true

      step GenerateMarkdownToc,
        in: :request,
        out: :toc

      or_step GenerateWebToc,
        in: :request,
        out: :toc
    end
  end
end
