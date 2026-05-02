# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class ReadFileContent
    include Services::Configs::Practical::V1

    option :path

    validates :path, presence: true

    def result
      return failure("File does not exist") unless File.exist?(path)

      success(content: File.read(path))
    end
  end
end
