
## Declare `in:`/`out:` explicitly on method steps

- Declare `in:`/`out:` on a [method step](/docs/the_what/what_is_a_method_step.html) explicitly - do not skip them just because a method step is a regular Ruby method with access to the whole instance, and could technically read or write instance state directly instead.

- This keeps the data flow of the whole step chain visible from the `step` declarations alone. One glance at the list of steps tells you what each step consumes and produces, without opening its method body, regardless of whether that step is a method step or a service step.

  ```ruby
  class ParseCents
    include ConvenientService::Standard::Config

    attr_reader :amount

    step :NormalizeAmount,
      in: :amount,
      out: :normalized_amount

    step :AssertValidAmount,
      in: :normalized_amount

    step :result,
      in: :normalized_amount,
      out: :cents

    def initialize(amount:)
      @amount = amount
    end

    def result
      success(cents: (normalized_amount.to_f * 100).round)
    end

    private

    def NormalizeAmount
      success(normalized_amount: amount.to_s.strip)
    end

    def AssertValidAmount
      return failure("Amount `#{normalized_amount}` is not a valid positive number") unless normalized_amount.match?(/\A\d+(\.\d{1,2})?\z/)

      success
    end
  end
  ```

- A method step's `in:` does not even have to match its method's parameter list - see [what is method step loose call?](/docs/the_what/what_is_method_step_loose_call.html)

### See also

- [What is a method step?](/docs/the_what/what_is_a_method_step.html)
- [What is a step?](/docs/the_what/what_is_a_step.html)
- [What is method step loose call?](/docs/the_what/what_is_method_step_loose_call.html)
- [Use upper camel case for method steps](/docs/best_practices/use_upper_camel_case_for_method_steps.html)
- [Name a step `:result` when it does the service's own job](/docs/best_practices/name_a_step_result_when_it_does_the_services_own_job.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_sequential_steps/concern.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_sequential_steps/concern.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step/commands/calculate_method_result.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step/commands/calculate_method_result.rb)
- [lib/convenient_service/service/plugins/can_have_steps/entities/step/concern/instance_methods.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/concern/instance_methods.rb)
