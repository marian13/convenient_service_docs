# frozen_string_literal: true



module CSDocs
  class Builder
    module Services
      class FindFreePort
        include ::CSDocs::Services::Configs::Practical::V1
    
        def result
          server = TCPServer.new("127.0.0.1", 0)
    
          port = server.addr[1]
    
          server.close
    
          success(port: port)
        end
      end
    end
  end
end
