# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class WriteBinaryFile
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :path
        option :content
    
        validates :path, presence: true
        validates :content, presence: true
    
        def result
          File.binwrite(path, content)
    
          success
        end
      end
    end
  end
end
