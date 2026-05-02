# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class KillProcess
    include Services::Configs::Practical::V1

    option :pid

    validates :pid, presence: true

    def result
      Process.kill("TERM", pid)
      Process.wait(pid)

      success
    end
  end
end
