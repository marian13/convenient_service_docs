---
tags:
  - extra
  - awesome_print
sources:
  - https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/extras/standard/config/options/awesome_print_inspect.rb
---

## How to load awesome_print_inspect standard config option?

- `awesome_print_inspect` standard config option enables colored `inspect` output for CS entities via [`awesome_print`](https://github.com/awesome-print/awesome_print).

- In order to load it, require `convenient_service` and the extra.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/standard/config/options/awesome_print_inspect"
  ```

- When config with `.with(:awesome_print_inspect)` is used, `ap` prints colored output.

  ```ruby
  class Service
    include ConvenientService::Standard::Config.with(:awesome_print_inspect)

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
