# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/convert_uri_to_dist_path"

module CSDocs
  class Builder
    module Services
      class ConvertUriToDistParentPath
        include ::CSDocs::Services::Configs::Practical::V1
    
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
  end
end
