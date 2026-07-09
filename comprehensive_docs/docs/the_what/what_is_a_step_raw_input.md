
## What is a step raw input?

- A step raw input passes a literal value from the class scope to a step, without calling any organizer method. It is written as `{step_parameter_name: raw(value)}` in `in:`.

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
      in: {number: raw(21)},
      out: {doubled: :points}
  end

  result = AwardLoyaltyPoints.result

  result.success?
  # => true

  result.data[:points]
  # => 42
  ```

- `raw` is a class method - it can wrap anything available in the enclosing class scope: literals, constants, other class methods.
- The wrapped value is forwarded as-is, without any intermediate processing - no organizer method is called for it. Unlike a [usual step input](/docs/the_what/what_is_a_usual_step_input.html) or a [step alias input](/docs/the_what/what_is_a_step_alias_input.html), `AwardLoyaltyPoints` above does not need any instance method at all to supply `number:`.
- Use a step raw input when a step needs a fixed value that does not depend on the organizer instance - for example, a constant or a value derived from the class itself.
- Compare with a [step proc input](/docs/the_what/what_is_a_step_proc_input.html), which evaluates its value in the organizer's instance scope instead of the class scope.

### See also

- [What step input types are available?](/docs/the_what/what_step_input_types_are_available.html)
- [What is a usual step input?](/docs/the_what/what_is_a_usual_step_input.html)
- [What is a step alias input?](/docs/the_what/what_is_a_step_alias_input.html)
- [What is a step proc input?](/docs/the_what/what_is_a_step_proc_input.html)
- [What is a step?](/docs/the_what/what_is_a_step.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_steps/concern.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/concern.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/raw.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/raw.rb)
- [lib/convenient_service/support/raw_value.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/support/raw_value.rb)
