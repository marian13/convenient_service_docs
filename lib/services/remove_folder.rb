# frozen_string_literal: true

require "fileutils"

require_relative "configs/practical/v1"

module Services
  class RemoveFolder
    include Services::Configs::Practical::V1

    option :path

    validates :path, presence: true

    def result
      FileUtils.rm_rf(path)

      success
    end
  end
end
