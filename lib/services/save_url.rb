# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "resolve_dist_folder_path"
require_relative "touch_folder"
require_relative "write_file"

module Services
  class SaveUrl
    include Services::Configs::Practical::V1

    option :uri
    option :content
    option :root
    option :logger

    validates :uri, presence: true
    validates :content, presence: true
    validates :root, presence: true
    validates :logger, presence: true

    step Services::ResolveDistFolderPath,
      in: [:uri, :root],
      out: [:dist_path, :dist_folder_path]

    step Services::TouchFolder,
      in: {path: :dist_folder_path}

    step Services::WriteFile,
      in: [{path: :dist_path}, :content]

    after :result do |result|
      logger.info { "built #{dist_path.delete_prefix("#{root}/")}" } if result.success?
    end
  end
end
