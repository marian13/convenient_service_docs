# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "resolve_locs_from_argv"
require_relative "resolve_locs_from_sitemap"

module Services
  class ResolveLocs
    include Services::Configs::Practical::V1

    option :root

    validates :root, presence: true

    step Services::ResolveLocsFromArgv,
      out: :locs

    or_step Services::ResolveLocsFromSitemap,
      in: :root,
      out: :locs
  end
end
