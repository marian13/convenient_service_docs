# frozen_string_literal: true

require "fileutils"

require_relative "configs/practical/v1"

module Services
  class TouchFolder
    include Services::Configs::Practical::V1

    option :path

    validates :path, presence: true

    def result
      FileUtils.mkdir_p(path)

      success
    end
  end
end
