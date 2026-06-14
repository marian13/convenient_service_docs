---
tags:
  - extra
  - memo_wise
sources:
  - https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/extras/standard/config/options/memo_wise.rb
---

## How to load memo_wise standard config option?

- `memo_wise` standard config option enables `memo_wise` memoization decorator for service methods via [`memo_wise`](https://github.com/panorama-ed/memo_wise).

- In order to load it, require `convenient_service` and the extra.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/standard/config/options/memo_wise"
  ```

- When config with `.with(:memo_wise)` is used, services can utilize `memo_wise`.

  ```ruby
  class Service
    include ConvenientService::Standard::Config.with(:memo_wise)

    def result
      success(foo: foo, bar: bar)
    end

    private

    memo_wise \
      def foo
        :foo
      end

    memo_wise \
      def bar
        :bar
      end
  end
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
