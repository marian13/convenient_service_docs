# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "convert_uri_to_dist_path"

module Services
  class ConvertUriToDistParentPath
    include Services::Configs::Practical::V1

    option :uri
    option :root

    validates :uri, presence: true
    validates :root, presence: true

    step Services::ConvertUriToDistPath,
      in: [:uri, :root],
      out: :dist_path

    step :result,
      in: :dist_path,
      out: :dist_parent_path

    private

    def result
      success(dist_parent_path: File.dirname(dist_path))
    end
  end
end
