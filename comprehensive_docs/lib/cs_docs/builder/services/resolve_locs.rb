# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class ResolveLocs
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :root
    
        validates :root, presence: true
    
        step Services::ResolveLocsFromArgv,
          out: :locs
    
        or_step Services::ResolveLocsFromSitemap,
          out: :locs
      end
    end
  end
end
