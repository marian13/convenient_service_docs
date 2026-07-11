---
tags:
  - services
  - best_practices
sources:
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step/middleware.rb
---

## Use upper camel case for method steps

- Name a [method step](/docs/the_what/what_is_a_method_step.html)'s method in upper camel case (e.g. `AssertValidAmount`), not the snake_case used for regular Ruby methods.

- This makes it visually obvious, at a glance, which private methods are steps versus ordinary helpers.

  ```ruby
  class ParseAmount
    include ConvenientService::Standard::Config

    attr_reader :raw_amount

    step :AssertValidAmount,
      in: :raw_amount

    step :result,
      in: :raw_amount,
      out: :cents

    def initialize(raw_amount:)
      @raw_amount = raw_amount
    end

    def result
      success(cents: to_cents)
    end

    private

    def AssertValidAmount
      return failure("Amount `#{raw_amount}` is not a valid positive number") unless raw_amount.to_s.match?(/\A\d+(\.\d{1,2})?\z/)

      success
    end

    def to_cents
      (raw_amount.to_f * 100).round
    end
  end
  ```

  `AssertValidAmount` is a method step (upper camel case, declared via `step :AssertValidAmount` above). `to_cents` is a regular private helper (snake_case, called directly from `result`). Just by looking at a method's name, you know which one it is.

### See also

- [What is a step?](/docs/the_what/what_is_a_step.html)
- [What is a method step?](/docs/the_what/what_is_a_method_step.html)
- [What is a service step?](/docs/the_what/what_is_a_service_step.html)
- [Declare `in:`/`out:` explicitly on method steps](/docs/best_practices/declare_in_out_explicitly_on_method_steps.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step/middleware.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step/middleware.rb)
