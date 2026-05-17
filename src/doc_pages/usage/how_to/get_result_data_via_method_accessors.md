---
title: How to get result data attributes/values via method-accessors?
---

# How to get result data attributes/values via method-accessors?

<cs-react-island component="DocAxes" props='{"label":"Usage / Basic / How-to / Task"}'></cs-react-island>

<cs-dita-short-description>

Access result data keys as methods instead of using bracket notation.

</cs-dita-short-description>

<cs-dita-task-prerequisites>

## Prerequisites

- A `success` result with a data payload.
- `short_syntax` enabled (the default in `ConvenientService::Standard::Config`).

</cs-dita-task-prerequisites>

<cs-dita-task-steps>

## Steps

1. Check the result status.
2. Call the data key as a method directly on `result.data`.

```ruby
result = FindUser.result(id: 1)

if result.success?
  result.data.user
end
```

This is equivalent to `result.data[:user]`.

</cs-dita-task-steps>

<cs-dita-task-result>

## Result

Data keys are accessible as methods. Both forms return the same value — use whichever reads more clearly at the call site.

Method accessors are available on `data` only. `message` and `code` do not support this syntax.

</cs-dita-task-result>

<cs-dita-related-links>

## Related

- [Result](/docs/entities/reference/result.html).

</cs-dita-related-links>
