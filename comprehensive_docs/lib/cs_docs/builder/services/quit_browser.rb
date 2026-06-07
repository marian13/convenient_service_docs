# frozen_string_literal: true


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
