---
tags:
  - services
sources:
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/usual.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/concern/instance_methods.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/exceptions.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/spec/lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/usual_spec.rb
---

## What is a usual step input?

- A usual step input passes a symbol in `in:` that matches an existing organizer instance method. Convenient Service calls that method and forwards its return value to the step under the same name.

  ```ruby
  class CalculateDoubled
    include ConvenientService::Standard::Config

    attr_reader :number

    def initialize(number:)
      @number = number
    end

    def result
      success(doubled: number * 2)
    end
  end

  class AwardLoyaltyPoints
    include ConvenientService::Standard::Config

    step CalculateDoubled,
      in: :number,
      out: {doubled: :points}

    private

    def number
      21
    end
  end

  result = AwardLoyaltyPoints.result

  result.success?
  # => true

  result.data[:points]
  # => 42
  ```

- `in: :number` calls `number` on the organizer (`AwardLoyaltyPoints`) and passes its return value as `number:` to the step (`CalculateDoubled`).
- Only a `Symbol` is accepted - a `String` (e.g. `in: "number"`) raises `UnsupportedKeyType` exception.
- This is the default step input type - use it whenever the step's parameter name already matches an organizer method name. When the names differ, use a [step alias input](/docs/the_what/what_is_a_step_alias_input.html) instead.

### See also

- [What step input types are available?](/docs/the_what/what_step_input_types_are_available.html)
- [What is a step alias input?](/docs/the_what/what_is_a_step_alias_input.html)
- [What is a step raw input?](/docs/the_what/what_is_a_step_raw_input.html)
- [What is a step proc input?](/docs/the_what/what_is_a_step_proc_input.html)
- [What is a step?](/docs/the_what/what_is_a_step.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/usual.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/usual.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/step/concern/instance_methods.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/concern/instance_methods.rb)
