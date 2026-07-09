
## What is a step alias input?

- A step alias input renames a step's parameter to a different organizer instance method, using a one-key hash in `in:`: `{step_parameter_name: :organizer_method_name}`.

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
      in: {number: :count},
      out: {doubled: :points}

    private

    def count
      21
    end
  end

  result = AwardLoyaltyPoints.result

  result.success?
  # => true

  result.data[:points]
  # => 42
  ```

- `in: {number: :count}` calls `count` on the organizer (`AwardLoyaltyPoints`) and passes its return value as `number:` to the step (`CalculateDoubled`).
- As a rule of thumb, the organizer method name is always on the right side of the hash, the step's parameter name is always on the left.
- Use a step alias input when the organizer has no method matching the step's parameter name, or when the matching organizer method already serves another purpose. Here the step needs `number:`, but the organizer's method is named `count`.
- Like a [usual step input](/docs/the_what/what_is_a_usual_step_input.html), the aliased organizer method can be `private` - `count` is `private` above.

### See also

- [What step input types are available?](/docs/the_what/what_step_input_types_are_available.html)
- [What is a usual step input?](/docs/the_what/what_is_a_usual_step_input.html)
- [What is a step raw input?](/docs/the_what/what_is_a_step_raw_input.html)
- [What is a step proc input?](/docs/the_what/what_is_a_step_proc_input.html)
- [What is a step?](/docs/the_what/what_is_a_step.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/alias.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/alias.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb)
