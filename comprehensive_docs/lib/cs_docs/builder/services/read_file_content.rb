# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class ReadFileContent
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :path
    
        validates :path, presence: true
    
        def result
          return failure("File does not exist") unless File.exist?(path)
    
          success(content: File.read(path))
        end
      end
    end
  end
end
