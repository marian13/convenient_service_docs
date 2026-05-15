# Always returning success

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Explanation / Concept"}'></cs-react-island>

<cs-dita-short-description>

Returning only success from every service is valid Ruby, but gives up the capabilities that the three-status model unlocks.

</cs-dita-short-description>

<cs-dita-concept-body>

## It works, but at a cost

A CS service that always returns `success` is perfectly valid. It runs, it returns a result, and `#call` gives back the data hash without any ceremony. Nothing breaks.

But a service that only ever returns `success` is effectively a plain Ruby method wearing a CS costume. The three-status model - `success`, `failure`, `error` - exists because each status unlocks different capabilities in CS: step short-circuiting, result inspection, structured error handling, and more.

By collapsing everything into `success`, those capabilities become unavailable. The service can no longer communicate whether it succeeded, hit a business condition, or encountered an unexpected problem. All outcomes look the same to the caller.

## It is up to the author

Whether to use all three statuses is the service author's decision. CS does not enforce it. Some services genuinely have only one outcome, and returning `success` is the right call.

The point is to make the choice deliberately. Returning `success` everywhere out of habit or to avoid dealing with `#result` is different from returning `success` because the service truly has no failure or error conditions.

The capabilities unlocked by `failure` and `error` will be covered in later articles.

</cs-dita-concept-body>

<cs-dita-related-links>

## Related

- [Service](/docs/entities/explanations/service.html).
- [Error result](/docs/entities/explanations/error_result.html).
- [Why result raises when data is accessed without a status check](/docs/entities/explanations/result_status_check.html).
</cs-dita-related-links>
