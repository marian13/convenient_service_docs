# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"

module CSDocs
  class Builder
    module Services
      class KillProcess
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :pid
    
        validates :pid, presence: true
    
        def result
          Process.kill("TERM", pid)
          Process.wait(pid)
    
          success
        end
      end
    end
  end
end
