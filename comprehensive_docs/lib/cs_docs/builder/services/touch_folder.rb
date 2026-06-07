# frozen_string_literal: true

require "fileutils"

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class TouchFolder
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :path
    
        validates :path, presence: true
    
        def result
          FileUtils.mkdir_p(path)
    
          success
        end
      end
    end
  end
end
