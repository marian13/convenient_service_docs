# Why result raises when data is accessed without a status check

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Explanation / Concept"}'></cs-react-island>

<cs-dita-short-description>

Accessing result data without checking the status raises an exception by design - to enforce explicit error handling.

</cs-dita-short-description>

<cs-dita-concept-body>

## The problem CS is solving

Most Ruby methods return a value or raise. The caller either gets data or handles an exception. There is no in-between.

CS services return a result object that carries a status - `success`, `failure`, or `error` - alongside optional data. The status tells the caller whether the operation succeeded before they touch the data.

The question is: what happens if the caller skips the status check and goes straight to the data?

## Raising is the answer

CS raises an exception if data is accessed on a result without a prior status check. This is intentional.

The reasoning: silently returning `nil` or an empty hash when a service failed would hide the failure. The caller would see blank data and have no indication that anything went wrong. The bug would surface far from the source, if at all.

Raising makes the contract explicit: you must acknowledge the outcome before reading the data.

## The three outcomes

A result is always one of three statuses:

- `success` - the operation completed as intended; data is available.
- `failure` - the operation completed but a business condition was not met; data may carry a reason.
- `error` - something unexpected happened; the operation could not complete.

All three must be handled. Checking only for `success` and ignoring `failure` is the same mistake as not checking at all.

## The escape hatch: `#call`

CS also provides `#call` for code that does not need structured result handling. Its behavior per status:

- `success` - returns `data.to_h`.
- `failure` - returns `nil`.
- `error` - raises `ErrorResultIsCalled`.

`error` still raises because it is close to an exception in nature - something unexpected happened at the system level. `#call` does not swallow that.

The typical pattern for `#call` users is to always return `success` from their services. They get the data hash directly, and if a `failure` slips through they get `nil`. If an `error` occurs, it surfaces as an exception - as it should.

`#call` is a deliberate opt-out, not the default. Using it means accepting that `failure` becomes invisible as `nil`.

</cs-dita-concept-body>

<cs-dita-related-links>

## Related

- [Service](/docs/entities/explanations/service.html).
- [Service reference](/docs/entities/reference/service.html).
</cs-dita-related-links>
