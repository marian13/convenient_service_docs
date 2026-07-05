---
tags:
  - services
sources:
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/aliases.rb
---

## What is a regular service?

- A regular service is a class with one responsibility - to calculate and return a result of a logical operation. It implements `result` directly and has no steps.

  ```ruby
  class FindUser
    include ConvenientService::Standard::Config

    attr_reader :id

    def initialize(id:)
      @id = id
    end

    def result
      return error("Id is `nil`") if id.nil?

      user = User.find_by(id: id)

      return failure("User with id `#{id}` does not exist") unless user

      success(user: user)
    end
  end

  result = FindUser.result(id: 1)

  result.success?
  # => true

  result.data[:user]
  ```

- A regular service is contrasted with an [organizer service](/docs/the_what/what_is_an_organizer_service.html), which composes other services via `step`s instead of implementing the logic directly.

### See also

- [What is a service?](/docs/the_what/what_is_a_service.html)
- [What is an organizer service?](/docs/the_what/what_is_an_organizer_service.html)
- [What is a result?](/docs/the_what/what_is_a_result.html)

### Sources

- [lib/convenient_service/service/configs/aliases.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/configs/aliases.rb)
