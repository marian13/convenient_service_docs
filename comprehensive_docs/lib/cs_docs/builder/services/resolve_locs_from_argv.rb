# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class ResolveLocsFromArgv
        include ::CSDocs::Services::Configs::Practical::V1
    
        def result
          return failure("ARGV is empty") unless ARGV.any?
    
          success(locs: ARGV)
        end
      end
    end
  end
end
