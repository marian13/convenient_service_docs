# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class ConvertUriToDistPath
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uri
        option :root
        option :config

        validates :uri, presence: true
        validates :root, presence: true
        validates :config, presence: true

        def result
          base_path = config[:base_path]

          path =
            if uri.path == "/"
              File.join(root, "dist", base_path, "index.html")
            else
              File.join(root, "dist", base_path, uri.path)
            end

          success(dist_path: path)
        end
      end
    end
  end
end
