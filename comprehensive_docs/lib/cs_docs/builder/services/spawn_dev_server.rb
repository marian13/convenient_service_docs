# frozen_string_literal: true


module CSDocs
  class Builder
    module Services
      class SpawnDevServer
        include ::CSDocs::Services::Configs::Practical::V1
    
        option :port
        option :root
    
        validates :port, presence: true
        validates :root, presence: true
    
        def result
          pid = spawn("PORT=#{port} bundle exec ruby lib/cs_docs/dev_server.rb", chdir: root)
    
          success(pid: pid)
        end
      end
    end
  end
end
