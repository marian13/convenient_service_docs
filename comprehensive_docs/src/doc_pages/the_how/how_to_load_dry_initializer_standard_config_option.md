---
tags:
  - extra
  - dry_initializer
sources:
  - https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/extras/standard/config/options/dry_initializer.rb
---

## How to load dry_initializer standard config option?

- `dry_initializer` standard config option enables `option` DSL for service constructor via [`dry-initializer`](https://github.com/dry-rb/dry-initializer).

- In order to load it, require `convenient_service` and the extra.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/standard/config/options/dry_initializer"
  ```

- When config with `.with(:dry_initializer)` is used, services can utilize `option`.

  ```ruby
  class Service
    include ConvenientService::Standard::Config.with(:dry_initializer)

    option :foo

    def result
      success
    end
  end
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
- [How to load dynamic dependencies?](/docs/the_how/how_to_load_dynamic_dependencies.html)
