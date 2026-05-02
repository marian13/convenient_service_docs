# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class WriteBinaryFile
    include Services::Configs::Practical::V1

    option :path
    option :content

    validates :path, presence: true
    validates :content, presence: true

    def result
      File.binwrite(path, content)

      success
    end
  end
end
