
## What is a step proc input?

- A step proc input, also called an inline step input, evaluates a `Proc` in the organizer's instance scope at run time and passes the returned value to the step. It is written as `{step_parameter_name: -> { ... }}` in `in:`.

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
      in: {number: -> { base_points * multiplier }},
      out: {doubled: :points}

    private

    def base_points
      7
    end

    def multiplier
      3
    end
  end

  result = AwardLoyaltyPoints.result

  result.success?
  # => true

  result.data[:points]
  # => 42
  ```

- The proc is evaluated via `instance_exec` on the organizer, so it has access to the organizer's instance methods and state - here, `base_points` and `multiplier` inside the lambda refer to `AwardLoyaltyPoints`'s own private methods.
- Both `-> { ... }` and `proc { ... }` work - any `Proc` is accepted.
- Like a [step raw input](/docs/the_what/what_is_a_step_raw_input.html), a step proc input does not go through any additional processing - the only difference is the scope it is evaluated in: instance scope for a proc input, class scope for a raw input.
- Use a step proc input when a step needs a value computed at run time from the organizer's own methods, constants, or state, without extracting that computation into its own organizer method first - here, `base_points * multiplier` is written inline at the step declaration instead of behind a dedicated method that a [usual step input](/docs/the_what/what_is_a_usual_step_input.html) or a [step alias input](/docs/the_what/what_is_a_step_alias_input.html) would have to reference.

### See also

- [What step input types are available?](/docs/the_what/what_step_input_types_are_available.html)
- [What is a usual step input?](/docs/the_what/what_is_a_usual_step_input.html)
- [What is a step alias input?](/docs/the_what/what_is_a_step_alias_input.html)
- [What is a step raw input?](/docs/the_what/what_is_a_step_raw_input.html)
- [What is a step?](/docs/the_what/what_is_a_step.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/proc.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/entities/callers/proc.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb)
