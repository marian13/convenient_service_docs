
## What is Convenient Service extra?

- An extra is a way to replace multiple often repeated plugin-specific `require` calls with a single one.

  For example, without an extra:

  ```ruby
  require "awesome_print"
  require "convenient_service"
  
  require "convenient_service/service/plugins/has_awesome_print_inspect"
  require "convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_awesome_print_inspect"
  require "convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/entities/data/plugins/has_awesome_print_inspect"
  require "convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/entities/message/plugins/has_awesome_print_inspect"
  require "convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/entities/status/plugins/has_awesome_print_inspect"
  require "convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/entities/code/plugins/has_awesome_print_inspect"
  require "convenient_service/service/plugins/can_have_steps/entities/step/plugins/has_awesome_print_inspect"
  require "convenient_service/feature/plugins/has_awesome_print_inspect"
  ```

  With an extra:

  ```ruby
  require "awesome_print"
  require "convenient_service"

  require "convenient_service/extras/standard/config/options/awesome_print_inspect"
  ```

- Extras are expected to be loaded from project entry points such as Rails initializers or `spec_helper.rb`.

### See also

- [What are Convenient Service dynamic dependencies?](/docs/the_what/what_are_convenient_service_dynamic_dependencies.html)

- [What extras are available?](/docs/the_what/what_extras_are_available.html)
