---
tags:
  - extra
  - alias
sources:
  - https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/extras/alias.rb
---

## How to load CS alias?

- CS alias extra makes `CS` available as a shorthand for `ConvenientService`.

- In order to load it, require `convenient_service` and the extra.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/alias"
  ```

- Once loaded, `CS` can be used in place of `ConvenientService`.

  ```ruby
  class Service
    include CS::Standard::Config

    def result
      success
    end
  end
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
