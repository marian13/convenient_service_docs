# Organizer service

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Reference / Reference"}'></cs-react-island>

<cs-dita-short-description>

An organizer service composes other services or methods via steps. If any step is not successful, the pipeline stops and that step result is returned as the whole service result.

</cs-dita-short-description>

<cs-dita-reference-syntax>

## Signature

```ruby
OrganizerService.result(...)
# => result object

OrganizerService.new(...).result
# => result object
```

</cs-dita-reference-syntax>

<cs-dita-reference-properties>

## Properties

| Property | Required | Description |
|---|---|---|
| Config | yes | Has a config like `ConvenientService::Standard::Config`. |
| Steps | yes | Has at least one step. |
| `#result` method | no | Optional - implement only if used as a [method step](/docs/entities/reference/method_step.html). |

</cs-dita-reference-properties>

<cs-dita-example>

## Example

```ruby
class ReadFileContent
  include ConvenientService::Standard::Config

  step AssertFileExists, in: :path
  step AssertFileNotEmpty, in: :path
  step :result, in: :path, out: :content

  attr_reader :path

  def initialize(path:)
    @path = path
  end

  def result
    success(content: ::File.read(path))
  end
end
```

If `AssertFileExists` returns a `failure` or `error`, the pipeline stops and `ReadFileContent` returns that `AssertFileExists` result. `AssertFileNotEmpty` and `step :result` are never executed.

```ruby
result = ReadFileContent.result(path: "/tmp/non_existent.txt")

result.success?
# => false

result.original_service.class
# => AssertFileExists
```

The same applies to `AssertFileNotEmpty` - if it is not successful, `ReadFileContent` returns its result and `step :result` is skipped.

```ruby
::File.write("/tmp/empty.txt", "")

result = ReadFileContent.result(path: "/tmp/empty.txt")

result.success?
# => false

result.original_service.class
# => AssertFileNotEmpty
```

When all steps succeed, `ReadFileContent` returns the final `step :result` result.

```ruby
::File.write("/tmp/hello.txt", "Hello!")

result = ReadFileContent.result(path: "/tmp/hello.txt")

result.success?
# => true

result.data[:content]
# => "Hello!"
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Service](/docs/entities/reference/service.html).
- [Regular service](/docs/entities/reference/regular_service.html).
- [Calling a service](/docs/capabilities/reference/calling_a_service.html).
- [Step](/docs/entities/reference/step.html).
- [Service step](/docs/entities/reference/service_step.html).
- [Method step](/docs/entities/reference/method_step.html).
- [Why the last step is named `:result`](/docs/entities/explanations/step_result_naming_convention.html).
</cs-dita-related-links>

<cs-doc-reviewed date="2026-05-15"></cs-doc-reviewed>
