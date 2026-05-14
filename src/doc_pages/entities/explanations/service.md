# Service

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Explanation / Concept"}'></cs-react-island>

<cs-dita-short-description>

A CS service is a class with one responsibility - to calculate and return a result.

</cs-dita-short-description>

<cs-dita-concept-body>

## What is a CS service?

_Service_ is a class that includes a config and executes one logical operation.

Two things distinguish a CS service from a plain Ruby class. First, it must include a config - the config wires the plugins that give the service its capabilities. Second, it must implement a `result` method that returns one of three structured outcomes: `success`, `failure`, or `error`.

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
```

</cs-dita-concept-body>
