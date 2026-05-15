# Service

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Reference / Reference"}'></cs-react-island>

<cs-dita-short-description>

A CS service is a class with one responsibility - to calculate and return a result of a logical operation.

</cs-dita-short-description>

<cs-dita-reference-syntax>

## Signature

```ruby
##
# Class-level invocation (most common).
#
ServiceName.result(*args, **kwargs, &block)
# => result object

ServiceName.call(*args, **kwargs, &block)
# => result.data.to_h, nil, or raises

##
# Instance-level invocation.
#
ServiceName.new(*args, **kwargs, &block).result
# => result object

ServiceName.new(*args, **kwargs, &block).call
# => result.data.to_h, nil, or raises
```

</cs-dita-reference-syntax>

<cs-dita-reference-properties>

## Properties

| Property | Required | Description |
|---|---|---|
| Config | yes | Must include a config via `include`. |
| Class-level `.result` | - | Instantiates and calls `#result` immediately. |
| Instance-level `.result` | - | Allows delaying the calculation until `#result` is called. |

</cs-dita-reference-properties>

<cs-dita-example>

## Examples

### Without steps

```ruby
class AssertFileExists
  include ConvenientService::Standard::Config

  attr_reader :path

  def initialize(path:)
    @path = path
  end

  def result
    return error("Path is `nil`") if path.nil?
    return error("Path is empty") if path.empty?

    return failure("File does not exist at path `#{path}`") unless ::File.exist?(path)

    success
  end
end

AssertFileExists.result(path: "Gemfile")
```

### With steps

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

ReadFileContent.result(path: "Gemfile")
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Regular service](/docs/entities/reference/regular_service.html).
- [Organizer service](/docs/entities/reference/organizer_service.html).
- [Calling a service](/docs/capabilities/reference/calling_a_service.html).
- Result.
- Config.
</cs-dita-related-links>

<cs-doc-reviewed date="2026-05-15"></cs-doc-reviewed>
