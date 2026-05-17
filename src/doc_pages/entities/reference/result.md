---
title: Result
---

# Result

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Reference / Reference"}'></cs-react-island>

<cs-dita-short-description>

A result is a data structure returned by every CS service that provides a unified way to check the outcome of an operation and access its data, message, and code.

</cs-dita-short-description>

<cs-dita-reference-syntax>

## Signature

```ruby
result = Service.result(*args, **kwargs, &block)
# => <Service::Result status: :success>
# => <Service::Result status: :failure>
# => <Service::Result status: :error>
```

</cs-dita-reference-syntax>

<cs-dita-reference-properties>

## Properties

### Status checks

| Method | Returns | Description |
|---|---|---|
| `success?` | `Boolean` | `true` if the service succeeded. |
| `failure?` | `Boolean` | `true` if the service returned a failure. |
| `error?` | `Boolean` | `true` if the service returned an error. |
| `not_success?` | `Boolean` | `true` if the result is a `failure` or `error`. |
| `not_failure?` | `Boolean` | `true` if the result is a `success` or `error`. |
| `not_error?` | `Boolean` | `true` if the result is a `success` or `failure`. |

### Attributes

| Method | Returns | Description |
|---|---|---|
| `status` | `Status` | The result status — `:success`, `:failure`, or `:error`. |
| `data` | `Data` | Key-value payload attached to the result. |
| `message` | `Message` | Human-readable string attached to the result. |
| `code` | `Code` | Machine-readable symbol attached to the result. |
| `service` | service instance | The service instance that produced this result. |
| `original_service` | service instance | The original service instance that produced this result. For results returned via steps, this is the step service — not the organizer. |


</cs-dita-reference-properties>

<cs-dita-behavior>

## Behavior

Accessing `data`, `message`, or `code` before checking the result status raises an error. See [How to disable mandatory result status check?](/docs/usage/how_to/disable_result_status_check.html).

Data keys are also accessible as methods: `result.data.content` is equivalent to `result.data[:content]`.

</cs-dita-behavior>

<cs-dita-example>

## Examples

### Handling all three statuses

```ruby
result = ReadFileContent.result(path: "README.md")

if result.success?
  puts result.data[:content]
elsif result.failure?
  puts result.message
else
  puts result.message
end
```

### Using data method access

```ruby
result = FindUser.result(id: 1)

if result.success?
  puts result.data.user.email
end
```

### Using unsafe_data in a debugger

```ruby
result = ReadFileContent.result(path: "README.md")

result.ud
# => #<Data content="...">
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Service](/docs/entities/reference/service.html).
- [Regular service](/docs/entities/reference/regular_service.html).
- [Organizer service](/docs/entities/reference/organizer_service.html).
- [Step](/docs/entities/reference/step.html).

</cs-dita-related-links>
