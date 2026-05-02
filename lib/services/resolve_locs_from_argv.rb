# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class ResolveLocsFromArgv
    include Services::Configs::Practical::V1

    def result
      return failure("ARGV is empty") unless ARGV.any?

      success(locs: ARGV)
    end
  end
end
