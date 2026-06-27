# frozen_string_literal: true

module CSDocs
  class DevServer < Sinatra::Base
    class LoadTocConfig
      include ::CSDocs::Services::Configs::Practical::V1

      step ::CSDocs::Services::GetRoot,
        out: :root

      step :result,
        in: :root,
        out: :toc_config

      def result
        toc_config = JSON.parse(File.read(File.join(root, 'src/toc.json')), symbolize_names: true)

        success(toc_config: toc_config)
      end
    end
  end
end
