# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class SavePage
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
