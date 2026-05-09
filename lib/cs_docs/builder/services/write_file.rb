# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class WriteFile
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :path
        option :content
    
        validates :path, presence: true
        validates :content, presence: true
    
        def result
          File.write(path, content)
    
          success
        end
      end
    end
  end
end
