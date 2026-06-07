# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class ConvertUriToDistParentPath
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :uri
        option :root
        option :config

        validates :uri, presence: true
        validates :root, presence: true
        validates :config, presence: true

        step Services::ConvertUriToDistPath,
          in: [:uri, :root, :config],
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
  end
end
