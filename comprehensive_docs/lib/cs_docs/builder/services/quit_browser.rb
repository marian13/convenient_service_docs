# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class QuitBrowser
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :browser
    
        validates :browser, presence: true
    
        def result
          browser.quit
    
          success
        end
      end
    end
  end
end
