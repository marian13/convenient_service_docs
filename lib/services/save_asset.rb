# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "resolve_dist_path"
require_relative "resolve_dist_folder_path"
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

    step Services::ResolveDistPath,
      in: [:uri, :root],
      out: {path: :asset_path_in_dist}

    step Services::ResolveDistFolderPath,
      in: [:uri, :root],
      out: {dist_folder_path: :asset_parent_path_in_dist}

    step Services::TouchFolder,
      in: {path: :asset_parent_path_in_dist}

    step Services::WriteBinaryFile,
      in: [{path: :asset_path_in_dist}, :body]

    after :result do |result|
      logger.info { "saved #{asset_path_in_dist.delete_prefix("#{root}/")}" } if result.success?
    end
  end
end
