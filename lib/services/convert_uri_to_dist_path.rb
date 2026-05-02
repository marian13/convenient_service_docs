# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class ConvertUriToDistPath
    include Services::Configs::Practical::V1

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
