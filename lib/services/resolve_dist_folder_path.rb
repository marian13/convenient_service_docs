# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class ResolveDistFolderPath
    include Services::Configs::Practical::V1

    option :uri
    option :root

    validates :uri, presence: true
    validates :root, presence: true

    def result
      dist_path =
        if uri.path == "/"
          File.join(root, "dist", "index.html")
        else
          File.join(root, "dist", uri.path)
        end

      success(dist_folder_path: File.dirname(dist_path))
    end
  end
end
