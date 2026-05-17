---
title: Service
---

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
Service.result(*args, **kwargs, &block)
# => result object

Service.call(*args, **kwargs, &block)
# => result.data.to_h, nil, or raises

##
# Instance-level invocation.
#
Service.new(*args, **kwargs, &block).result
# => result object

Service.new(*args, **kwargs, &block).call
# => result.data.to_h, nil, or raises
```

</cs-dita-reference-syntax>

<cs-dita-reference-properties>

## Properties

| Property | Required | Description |
|---|---|---|
| [Config](/docs/entities/reference/config.html) | yes | Has a config like `ConvenientService::Standard::Config`. |

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

result = AssertFileExists.result(path: "Gemfile")

if result.success?
  puts "File exists"
else
  puts result.message
end
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

result = ReadFileContent.result(path: "Gemfile")

if result.success?
  puts result.data[:content]
else
  puts result.message
end
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Regular service](/docs/entities/reference/regular_service.html).
- [Organizer service](/docs/entities/reference/organizer_service.html).
- [Calling a service](/docs/capabilities/reference/calling_a_service.html).
- [Step](/docs/entities/reference/step.html).
- [Method step](/docs/entities/reference/method_step.html).
- [Result](/docs/entities/reference/result.html).
- [Config](/docs/entities/reference/config.html).
</cs-dita-related-links>

<cs-doc-reviewed date="2026-05-15"></cs-doc-reviewed>
