```ruby
require "dry-initializer"
require "memo_wise"
require "awesome_print"

require "convenient_service"
require "convenient_service/extras/standard/config/options/dry_initializer"
require "convenient_service/extras/standard/config/options/active_model_validations"
require "convenient_service/extras/standard/config/options/memo_wise"
require "convenient_service/extras/standard/config/options/awesome_print_inspect"

module Service
  module Practical
    module V1
      module Config
        include ConvenientService::Config

        included do
          include ConvenientService::Standard::Config
            .with(
              {fault_tolerance: true},
              {rollbacks: false},
              :dry_initializer,
              :active_model_validations,
              :memo_wise,
              :awesome_print_inspect            
            )
        end
      end
    end
  end
end
```
