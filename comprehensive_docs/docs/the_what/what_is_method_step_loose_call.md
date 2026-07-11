
## What is method step loose call?

- Loose call is how Convenient Service invokes a [method step](/docs/the_what/what_is_a_method_step.html)'s method - it passes each `in:` value as an argument only if the method actually accepts it, and leaves out any value the method does not declare.

  ```ruby
  class ApplyDiscount
    include ConvenientService::Standard::Config

    attr_reader :amount, :discount_rate

    step :AssertValidDiscountRate,
      in: :discount_rate

    step :result,
      in: [:amount, :discount_rate]

    def initialize(amount:, discount_rate:)
      @amount = amount
      @discount_rate = discount_rate
    end

    private

    def AssertValidDiscountRate
      return failure("Discount rate `#{discount_rate}` must be between 0 and 1") unless discount_rate.between?(0, 1)

      success
    end

    def result(amount:)
      success(discounted_amount: amount - (amount * discount_rate))
    end
  end
  ```

  `result` declares `in: [:amount, :discount_rate]`, but its signature only accepts `amount:`. Loose call passes `amount` in as a keyword argument because the method declares it, and simply does not pass `discount_rate` - `result` reads that one directly from the instance instead, through the `attr_reader` above.

- A required argument or keyword that `in:` does not supply still raises `ArgumentError`, the same as calling any Ruby method with a missing required parameter. Loose call only skips arguments the method does not declare - it does not invent values for the ones it does.

### See also

- [What is a method step?](/docs/the_what/what_is_a_method_step.html)
- [What is a step?](/docs/the_what/what_is_a_step.html)
- [Declare `in:`/`out:` explicitly on method steps](/docs/best_practices/declare_in_out_explicitly_on_method_steps.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step/commands/calculate_method_result.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/step/plugins/can_be_method_step/commands/calculate_method_result.rb)
- [lib/convenient_service/utils/method/loose_call.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/utils/method/loose_call.rb)
- [spec/e2e/loose_method_steps_spec.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/spec/e2e/loose_method_steps_spec.rb)
