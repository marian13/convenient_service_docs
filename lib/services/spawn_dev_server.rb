# frozen_string_literal: true

require_relative "configs/practical/v1"

module Services
  class SpawnDevServer
    include Services::Configs::Practical::V1

    option :port
    option :root

    validates :port, presence: true
    validates :root, presence: true

    def result
      pid = spawn("PORT=#{port} bundle exec ruby lib/dev_server.rb", chdir: root)

      success(pid: pid)
    end
  end
end
