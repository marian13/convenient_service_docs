---
tags:
  - extra
  - amazing_print
sources:
  - https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/extras/standard/config/options/amazing_print_inspect.rb
---

## How to load amazing_print_inspect standard config option?

- `amazing_print_inspect` standard config option enables colored `inspect` output for CS entities via [`amazing_print`](https://github.com/amazing-print/amazing_print).

- In order to load it, require `convenient_service` and the extra.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/standard/config/options/amazing_print_inspect"
  ```

- When config with `.with(:amazing_print_inspect)` is used, `ap` prints colored output.

  ```ruby
  class Service
    include ConvenientService::Standard::Config.with(:amazing_print_inspect)

    def result
      success
    end
  end

  ap Service.result
  # {
  #     :ConvenientService => {
  #          :entity => "Result",
  #         :service => "Service",
  #          :status => :success
  # }
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
