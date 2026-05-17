---
title: How to inspect a result without checking its status?
---

# How to inspect a result without checking its status?

<cs-react-island component="DocAxes" props='{"label":"Debugging / Basic / How-to / Task"}'></cs-react-island>

<cs-dita-short-description>

Use the unsafe accessors to read result attributes in a debugger session without triggering the status check guard.

</cs-dita-short-description>

<cs-dita-task-prerequisites>

## Prerequisites

- A result object from a service call.
- `code_review_automation` enabled (the default in `Standard::Config`).

</cs-dita-task-prerequisites>

<cs-dita-task-steps>

## Steps

1. Call the service to get a result.
2. Access the attribute directly using one of the unsafe accessors:

| Method | Reads |
|---|---|
| `unsafe_data` | data payload |
| `unsafe_message` | message |
| `unsafe_code` | code |
| `ud` | data payload (short alias for `unsafe_data`) |

</cs-dita-task-steps>

<cs-dita-task-result>

## Result

The attribute value is returned without raising, regardless of whether the result status has been checked.

</cs-dita-task-result>

<cs-dita-example>

## Examples

```ruby
result = ReadFileContent.result(path: "README.md")

result.unsafe_data    # => #<Data content="...">
result.unsafe_message # => #<Message value="">
result.unsafe_code    # => #<Code value=:default>

result.ud             # => #<Data content="...">
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Result](/docs/entities/reference/result.html).

</cs-dita-related-links>
