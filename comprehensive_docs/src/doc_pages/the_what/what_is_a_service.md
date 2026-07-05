---
tags:
  - services
sources:
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/aliases.rb
---

## What is a service?

- A service is an object that does exactly one operation, [nothing more, nothing less](https://ludwig.guru/s/nothing+more+and+nothing+less).

- In Convenient Service, a service is a plain Ruby class that includes [`ConvenientService::Standard::Config`](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/aliases.rb) and defines a single `result` method.

  ```ruby
  class Service
    include ConvenientService::Standard::Config

    def result
      success
    end
  end

  Service.result
  # => #<Service::Result status: :success ...>
  ```

- Calling a service always returns a [JSend](https://github.com/omniti-labs/jsend)-style result object, not a raw value.

  ```ruby
  Service.result.success?
  # => true
  ```

- Besides `result`, a service can also be called with `call`, at the class or instance level. `result` returns the full result object; `call` returns just its data hash.

  ```ruby
  Service.result        # => #<Service::Result ...>
  Service.call          # => {value: 42}
  Service.new.result    # => #<Service::Result ...>
  Service.new.call      # => {value: 42}
  ```

- A service is either a [regular service](/docs/the_what/what_is_a_regular_service.html) (implements `result` directly) or an [organizer service](/docs/the_what/what_is_an_organizer_service.html) (composes other services via `step`s).

### See also

- [Why do we need services?](/docs/the_why/why_do_we_need_services.html)
- [What is a regular service?](/docs/the_what/what_is_a_regular_service.html)
- [What is an organizer service?](/docs/the_what/what_is_an_organizer_service.html)
- [What is a result?](/docs/the_what/what_is_a_result.html)

### Sources

- [lib/convenient_service/service/configs/aliases.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/aliases.rb)
