# frozen_string_literal: true

module CSDocs
  module Services
    class GetRoot
      include ::CSDocs::Services::Configs::Practical::V1

      def result
        success(root: File.expand_path('../../..', __dir__))
      end
    end
  end
end
