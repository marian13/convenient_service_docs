
## Name a step `:result` when it does the service's own job

- Name a step `:result` (which invokes `def result`) when the work it does is the service class's own described job - the thing the class name says it does.

- Give every other step a specific name for what it does instead.

- Every Convenient Service class exposes its own work through `result`.

  ```ruby
  class AssertValidAmount
    include ConvenientService::Standard::Config

    attr_reader :raw_amount

    def initialize(raw_amount:)
      @raw_amount = raw_amount
    end

    def result
      return failure("Amount `#{raw_amount}` is not a valid positive number") unless raw_amount.to_s.match?(/\A\d+(\.\d{1,2})?\z/)

      success
    end
  end
  ```

  A [regular service](/docs/the_what/what_is_a_regular_service.html) has no steps - it implements its whole job in `result` directly, like `AssertValidAmount` above.

- An [organizer service](/docs/the_what/what_is_an_organizer_service.html) that still needs custom logic for its own job puts that logic in `step :result`, the same place, instead of inventing a separate step name for it.

  ```ruby
  class ParseAmount
    include ConvenientService::Standard::Config

    attr_reader :raw_amount

    step AssertValidAmount,
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

    def to_cents
      (raw_amount.to_f * 100).round
    end
  end
  ```

  `ParseAmount`'s own described job is parsing a raw amount. That logic lives in `:result`. `AssertValidAmount` is a supporting check, not the class's own job, so it keeps its own name.

- When an organizer's whole job is already covered by its other steps, with nothing left for the class itself to do, it needs neither a `step :result` nor a `result` method.

- The last step's own result becomes the organizer's result in that case.

  ```ruby
  class ConvertToCents
    include ConvenientService::Standard::Config

    attr_reader :raw_amount

    def initialize(raw_amount:)
      @raw_amount = raw_amount
    end

    def result
      success(cents: (raw_amount.to_f * 100).round)
    end
  end

  class ProcessAmount
    include ConvenientService::Standard::Config

    attr_reader :raw_amount

    step AssertValidAmount,
      in: :raw_amount

    step ConvertToCents,
      in: :raw_amount,
      out: :cents

    def initialize(raw_amount:)
      @raw_amount = raw_amount
    end
  end
  ```

  `ProcessAmount` has no job of its own left over - validating and converting are both fully delegated to `AssertValidAmount` and `ConvertToCents`. There is no `step :result` and no `result` method - `ConvertToCents`'s own result becomes `ProcessAmount`'s result.

### See also

- [What is a step?](/docs/the_what/what_is_a_step.html)
- [What is a method step?](/docs/the_what/what_is_a_method_step.html)
- [What is an organizer service?](/docs/the_what/what_is_an_organizer_service.html)
- [Use upper camel case for method steps](/docs/best_practices/use_upper_camel_case_for_method_steps.html)

### Sources

- [lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_step/concern.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_step/concern.rb)
- [lib/convenient_service/service/plugins/can_have_steps/concern.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/concern.rb)
