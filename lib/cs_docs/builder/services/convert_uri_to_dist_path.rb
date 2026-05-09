# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class ConvertUriToDistPath
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uri
        option :root
    
        validates :uri, presence: true
        validates :root, presence: true
    
        def result
          path =
            if uri.path == "/"
              File.join(root, "dist", "index.html")
            else
              File.join(root, "dist", uri.path)
            end
    
          success(dist_path: path)
        end
      end
    end
  end
end
