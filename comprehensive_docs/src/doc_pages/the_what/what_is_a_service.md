---
tags:
  - services
sources:
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/standard.rb
---

## What is a service?

- In Convenient Service, a service is a plain Ruby class that includes a [config](/docs/the_what/what_is_a_config.html) ([`ConvenientService::Standard::Config`](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/standard.rb) most of the time).

- A service either implements `result` directly, or composes other services via `step`s.

  ```ruby
  ##
  # Without steps.
  #
  class Service
    include ConvenientService::Standard::Config

    def result
      success(value: 42)
    end
  end

  ##
  # With steps.
  #
  class OrganizerService
    include ConvenientService::Standard::Config

    step Service, out: :value
  end

  result = OrganizerService.result

  result.success?
  # => true

  result.data[:value]
  # => 42
  ```

- Invoking a service always returns a result object, not a raw value. It is inspired by [JSend](https://github.com/omniti-labs/jsend), not compatible with it. Its status is always one of `success`, `failure`, or `error`.

  ```ruby
  class FindUser
    include ConvenientService::Standard::Config

    attr_reader :id

    def initialize(id:)
      @id = id
    end

    def result
      return error("Id is `nil`") if id.nil?

      users = {1 => {name: "John"}}

      return failure("User with id `#{id}` does not exist") unless users.key?(id)

      success(user: users[id])
    end
  end

  FindUser.result(id: 1).success?
  # => true

  FindUser.result(id: 2).failure?
  # => true

  FindUser.result(id: nil).error?
  # => true
  ```

- `failure` is for an anticipated negative outcome (a business rule was not met, e.g. a user was not found).

- `error` is for an unexpected condition (e.g. an invalid argument was passed).

- Besides `result`, a service can also be called with `call`, at the class or instance level.

- `result` always returns the full result object. `call` returns the result's data hash on `success`, `nil` on `failure`, and raises on `error`.

  ```ruby
  FindUser.call(id: 1)
  # => {user: {name: "John"}}

  FindUser.call(id: 2)
  # => nil

  FindUser.call(id: nil)
  # raises ConvenientService::Result::Exceptions::ErrorResultIsCalled

  FindUser.new(id: 1).call
  # => {user: {name: "John"}}
  ```

- The first style is a [regular service](/docs/the_what/what_is_a_regular_service.html); the second is an [organizer service](/docs/the_what/what_is_an_organizer_service.html).

### See also

- [Why do we need services?](/docs/the_why/why_do_we_need_services.html)
- [What is a regular service?](/docs/the_what/what_is_a_regular_service.html)
- [What is an organizer service?](/docs/the_what/what_is_an_organizer_service.html)
- [What is a result?](/docs/the_what/what_is_a_result.html)
- [What is a config?](/docs/the_what/what_is_a_config.html)

### Sources

- [lib/convenient_service/service/configs/standard.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/standard.rb)
