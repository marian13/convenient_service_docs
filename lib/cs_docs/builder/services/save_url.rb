# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/convert_uri_to_dist_path"
require "cs_docs/builder/services/convert_uri_to_dist_parent_path"
require "cs_docs/builder/services/touch_folder"
require "cs_docs/builder/services/write_file"

module CSDocs
  class Builder
    module Services
      class SaveUrl
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uri
        option :content
        option :root
        option :logger
    
        validates :uri, presence: true
        validates :content, presence: true
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
    
        step Services::WriteFile,
          in: [{path: :dist_path}, :content]
    
        after :result do |result|
          logger.info { "built #{dist_path.delete_prefix("#{root}/")}" } if result.success?
        end
      end
    end
  end
end
