# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class QuitBrowser
    include Services::Configs::Practical::V1

    option :browser

    validates :browser, presence: true

    def result
      browser.quit

      success
    end
  end
end
