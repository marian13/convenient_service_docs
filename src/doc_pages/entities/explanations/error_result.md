# Error result

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Explanation / Concept"}'></cs-react-island>

<cs-dita-short-description>

An error result represents an unexpected condition - the service equivalent of a raised exception.

</cs-dita-short-description>

<cs-dita-concept-body>

## Error and exceptions

In plain Ruby, unexpected conditions raise exceptions. In CS, they produce an `error` result. The two are close in nature: both signal that something went wrong at the system level, not that a business condition was unmet.

This is why `error` behaves differently from `failure` in CS. A `failure` is an expected negative outcome - the service ran, checked a condition, and the condition was not met. An `error` means the service could not complete its job at all.

This distinction is also why `#call` still raises when it encounters an `error` result. Unlike `failure`, an `error` cannot be silently represented as `nil` - it must surface.

</cs-dita-concept-body>

<cs-dita-related-links>

## Related

- [Why result raises when data is accessed without a status check](/docs/entities/explanations/result_status_check.html).
- [Service](/docs/entities/explanations/service.html).
</cs-dita-related-links>
