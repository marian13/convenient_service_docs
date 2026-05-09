# frozen_string_literal: true

require "cs_docs/services/configs/practical/v1"
require "cs_docs/builder/services/resolve_locs_from_argv"
require "cs_docs/builder/services/resolve_locs_from_sitemap"

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
          in: :root,
          out: :locs
      end
    end
  end
end
