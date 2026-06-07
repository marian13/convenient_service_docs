# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class SaveAsset
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uri
        option :body
        option :root
        option :config
        option :logger

        validates :uri, presence: true
        validates :body, presence: true
        validates :root, presence: true
        validates :config, presence: true
        validates :logger, presence: true

        step Services::ConvertUriToDistPath,
          in: [:uri, :root, :config],
          out: :dist_path

        step Services::ConvertUriToDistParentPath,
          in: [:uri, :root, :config],
          out: :dist_parent_path
    
        step Services::TouchFolder,
          in: {path: :dist_parent_path}
    
        step Services::WriteBinaryFile,
          in: [{path: :dist_path}, {content: :body}]
    
        after :result do |result|
          logger.info { "saved #{dist_path.delete_prefix("#{root}/")}" } if result.success?
        end
      end
    end
  end
end
