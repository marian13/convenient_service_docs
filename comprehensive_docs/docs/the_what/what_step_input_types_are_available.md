
## What step input types are available?

- A step input is how a value declared in a [step](/docs/the_what/what_is_a_step.html)'s `in:` reaches that step.
- [Usual step input](/docs/the_what/what_is_a_usual_step_input.html) - passes an existing organizer method's return value under the method's own name.

  ```ruby
  step SomeService,
    in: :some_param,
    out: :some_output
  ```

- [Step alias input](/docs/the_what/what_is_a_step_alias_input.html) - renames a step's parameter to a different organizer method.

  ```ruby
  step SomeService,
    in: {some_param: :some_method},
    out: :some_output
  ```

- [Step raw input](/docs/the_what/what_is_a_step_raw_input.html) - passes a literal value from the class scope, unprocessed.

  ```ruby
  step SomeService,
    in: {some_param: raw(:some_value)},
    out: :some_output
  ```

- [Step proc input](/docs/the_what/what_is_a_step_proc_input.html) - evaluates a `Proc` in the organizer's instance scope at run time.

  ```ruby
  step SomeService,
    in: {some_param: -> { some_method }},
    out: :some_output
  ```

- Any combination of these input types can be used together in the same `in:` array.

### See also

- [What is a step?](/docs/the_what/what_is_a_step.html)
- [What is a service step?](/docs/the_what/what_is_a_service_step.html)
- [What is a method step?](/docs/the_what/what_is_a_method_step.html)

### Sources

- [lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_steps/entities/method/commands/cast_method_factory.rb)
