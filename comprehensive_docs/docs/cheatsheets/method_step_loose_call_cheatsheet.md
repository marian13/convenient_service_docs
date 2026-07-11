
## Method step loose call cheatsheet

- Every form below is [method step loose call](/docs/the_what/what_is_method_step_loose_call.html): Convenient Service passes an `in:` value into the method only if the method's own signature accepts it. Several forms also show what happens when a value is not supplied at all - the method's own default, an existing instance method, or a `nil` block takes over instead.

### No argument

| | |
|--|--|
| Step declaration | `step :result, in: :amount` |
| Method signature | `def result` |
| Result | Method ignores `in:` and can read `amount` from the instance if needed. |

### Required positional

| | |
|--|--|
| Step declaration | `step :result, in: {0 => -> { amount }}` |
| Method signature | `def result(amount)` |
| Result | `amount` passed in as the first positional argument. |

### Missing required positional

| | |
|--|--|
| Step declaration | `step :result, in: :amount` (a keyword `in:`, not positional) |
| Method signature | `def result(amount)` |
| Result | Raises `ArgumentError` - no positional value was declared for the method to receive. |

### Optional positional

| | |
|--|--|
| Step declaration | `step :result, in: {0 => -> { amount }}` |
| Method signature | `def result(amount = 0)` |
| Result | `amount` passed in, overriding the default. |

### Rest positional (`*args`)

| | |
|--|--|
| Step declaration | `step :result, in: [{0 => -> { first }}, {1 => -> { second }}]` |
| Method signature | `def result(*args)` |
| Result | `args` receives every declared positional `in:` value, in order. |

### Required keyword

| | |
|--|--|
| Step declaration | `step :result, in: :amount` |
| Method signature | `def result(amount:)` |
| Result | `amount` passed in as a keyword argument - the keyword takes priority over an instance method of the same name, if one exists. |

### Missing required keyword

| | |
|--|--|
| Step declaration | `step :result, in: :amount` (no `discount_rate`) |
| Method signature | `def result(amount:, discount_rate:)` |
| Result | Raises `ArgumentError` - loose call never invents a value for a declared parameter. |

### Optional keyword

| | |
|--|--|
| Step declaration | `step :result, in: :amount` |
| Method signature | `def result(amount: 0)` |
| Result | `amount` passed in, overriding the default. |

### Optional keyword not supplied

| | |
|--|--|
| Step declaration | `step :result` (no `in:` at all) |
| Method signature | `def result(amount: 10)` |
| Result | Loose call passes no `amount`, so the method's own default (`10`) is kept. |

### Rest keyword (`**kwargs`)

| | |
|--|--|
| Step declaration | `step :result, in: [:first, :second]` |
| Method signature | `def result(**kwargs)` |
| Result | `kwargs` receives every declared keyword `in:` value. |

### Block

| | |
|--|--|
| Step declaration | `step :result, in: {block => -> { some_proc }}` |
| Method signature | `def result(&block)` |
| Result | `block` is passed in as the method's block. |

### Block not supplied

| | |
|--|--|
| Step declaration | `step :result` (no `in:` for `block`) |
| Method signature | `def result(&block)` |
| Result | `block` receives `nil` - no error, since a block parameter is always optional in Ruby. The method can fall back to a default proc itself. |

### See also

- [What is method step loose call?](/docs/the_what/what_is_method_step_loose_call.html)
- [What is a method step?](/docs/the_what/what_is_a_method_step.html)
- [Declare `in:`/`out:` explicitly on method steps](/docs/best_practices/declare_in_out_explicitly_on_method_steps.html)

### Sources

- [spec/e2e/loose_method_steps_spec.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/spec/e2e/loose_method_steps_spec.rb)
- [lib/convenient_service/utils/method/loose_call.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/utils/method/loose_call.rb)
