# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "convert_uri_to_dist_path"
require_relative "convert_uri_to_dist_parent_path"
require_relative "touch_folder"
require_relative "write_binary_file"

module Services
  class SaveAsset
    include Services::Configs::Practical::V1

    option :uri
    option :body
    option :root
    option :logger

    validates :uri, presence: true
    validates :body, presence: true
    validates :root, presence: true
    validates :logger, presence: true

    step Services::ConvertUriToDistPath,
      in: [:uri, :root],
      out: :dist_path

    step Services::ConvertUriToDistParentPath,
      in: [:uri, :root],
      out: :dist_parent_path

    step Services::TouchFolder,
      in: {path: :dist_parent_path}

    step Services::WriteBinaryFile,
      in: [{path: :dist_path}, :body]

    after :result do |result|
      logger.info { "saved #{dist_path.delete_prefix("#{root}/")}" } if result.success?
    end
  end
end
