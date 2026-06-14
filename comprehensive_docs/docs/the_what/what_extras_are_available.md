
## What extras are available?

### Standard config options

- [active_model_validations standard config option](/docs/the_how/how_to_load_active_model_validations_standard_config_option.html) - enables `validates` DSL for service result params validation via [`active_model`](https://github.com/rails/rails/tree/main/activemodel).

  ```ruby
  require "convenient_service/extras/standard/config/options/active_model_validations"
  ```

- [amazing_print_inspect standard config option](/docs/the_how/how_to_load_amazing_print_inspect_standard_config_option.html) - enables colored `inspect` output for CS entities via [`amazing_print`](https://github.com/amazing-print/amazing_print).

  ```ruby
  require "convenient_service/extras/standard/config/options/amazing_print_inspect"
  ```

- [awesome_print_inspect standard config option](/docs/the_how/how_to_load_awesome_print_inspect_standard_config_option.html) - enables colored `inspect` output for CS entities via [`awesome_print`](https://github.com/awesome-print/awesome_print).

  ```ruby
  require "convenient_service/extras/standard/config/options/awesome_print_inspect"
  ```

- [dry_initializer standard config option](/docs/the_how/how_to_load_dry_initializer_standard_config_option.html) - enables `option` DSL for service constructor via [`dry-initializer`](https://github.com/dry-rb/dry-initializer).

  ```ruby
  require "convenient_service/extras/standard/config/options/dry_initializer"
  ```

- [memo_wise standard config option](/docs/the_how/how_to_load_memo_wise_standard_config_option.html) - enables method memoization via [`memo_wise`](https://github.com/panorama-ed/memo_wise).

  ```ruby
  require "convenient_service/extras/standard/config/options/memo_wise"
  ```

### Standalone

- [CS alias](/docs/the_how/how_to_load_cs_alias.html) - makes `CS` available as a shorthand for `ConvenientService`.

  ```ruby
  require "convenient_service/extras/alias"
  ```

- [RSpec extensions](/docs/the_how/how_to_load_rspec_extensions.html) - loads RSpec matchers and helpers for testing CS services.

  ```ruby
  require "convenient_service/extras/rspec"
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
