# frozen_string_literal: true

module CSDocs
  class DevServer < Sinatra::Base
    class LoadTocData
      include ::CSDocs::Services::Configs::Practical::V1

      step ::CSDocs::Services::GetRoot,
        out: :root

      step :result,
        in: :root,
        out: :toc_data

      def result
        toc_data = JSON.parse(File.read(File.join(root, 'src/toc.json')), symbolize_names: true)

        success(toc_data: toc_data)
      end
    end
  end
end
