# Service

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Reference / Reference topic"}'></cs-react-island>

<cs-dita-short-description>

A CS service is a class with one responsibility - to calculate and return a result.

</cs-dita-short-description>

<cs-dita-reference-syntax>

## Signature

```ruby
## Class-level call (most common)
ServiceName.result(*args, **kwargs, &block) # => result object

## Instance-level call
ServiceName.new(*args, **kwargs, &block).result # => result object
```

</cs-dita-reference-syntax>

<cs-dita-reference-properties>

## Properties

| Property | Required | Description |
|---|---|---|
| Config | yes | Must include a config via `include` |
| `result` method | yes | Must implement `result` returning `success`, `failure`, or `error` |
| Class-level `.result` | - | Instantiates and calls `result` immediately |
| Instance-level `.result` | - | Allows delaying the calculation until `.result` is called |

</cs-dita-reference-properties>

<cs-dita-example>

## Example

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

</cs-dita-example>

<cs-dita-related-links>

## Related

- Result
- Config

</cs-dita-related-links>
