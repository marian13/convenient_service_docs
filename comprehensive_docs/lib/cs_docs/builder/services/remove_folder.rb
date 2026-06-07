# frozen_string_literal: true



module CSDocs
  class Builder
    module Services
      class RemoveFolder
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :path
    
        validates :path, presence: true
    
        def result
          FileUtils.rm_rf(path)
    
          success
        end
      end
    end
  end
end
