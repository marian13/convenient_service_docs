---
title: How to disable mandatory result status check?
---

# How to disable mandatory result status check?

<cs-react-island component="DocAxes" props='{"label":"Usage / Advanced / How-to / Task"}'></cs-react-island>

<cs-dita-short-description>

Exclude `code_review_automation` from the config to remove the status check guard and its related code quality restrictions.

</cs-dita-short-description>

<cs-dita-task-prerequisites>

## Prerequisites

- `ConvenientService::Standard::Config` included in the service.

</cs-dita-task-prerequisites>

<cs-dita-task-steps>

## Steps

1. Replace `include ConvenientService::Standard::Config` with `include ConvenientService::Standard::Config.without(:code_review_automation)`.

```ruby
class ReadFileContent
  include ConvenientService::Standard::Config.without(:code_review_automation)

  # ...
end
```

</cs-dita-task-steps>

<cs-dita-task-result>

## Result

The following behaviors are disabled:

- Accessing `data`, `message`, or `code` before checking result status no longer raises.
- Services can be inherited.
- Convenient Service entities are allowed as constructor arguments.
- `success?`, `failure?`, and `error?` no longer track whether the status was checked.

This is a trade-off — the safety net is removed in exchange for reduced overhead on every result access.

</cs-dita-task-result>

<cs-dita-related-links>

## Related

- [Result](/docs/entities/reference/result.html).
- [How to inspect a result without checking its status?](/docs/debugging/how_to/inspect_result_without_status_check.html).

</cs-dita-related-links>
