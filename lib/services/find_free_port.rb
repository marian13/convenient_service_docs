# frozen_string_literal: true

require "socket"

require_relative "configs/practical/v1"

module Services
  class FindFreePort
    include Services::Configs::Practical::V1

    def result
      server = TCPServer.new("127.0.0.1", 0)

      port = server.addr[1]

      server.close

      success(port: port)
    end
  end
end
