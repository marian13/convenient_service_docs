# Service

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Explanation / Concept"}'></cs-react-island>

<cs-dita-short-description>

A CS service is a class with one responsibility - to calculate and return a result of a logical operation.

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

## Why result forces a status check

`#result` returns a result object, not raw data. Accessing data on that object without first checking the status raises an exception - by design. This forces the caller to handle all three outcomes (`success`, `failure`, `error`) explicitly rather than silently ignoring errors.

This is the default posture of CS: safe by default, explicit about outcomes.

## The escape hatch: `#call`

CS services also expose `#call` for code that does not need structured result handling. It returns `result.data.to_h` on `success`, `nil` on `failure`, and still raises on `error` - because `error` is close to an exception in nature and should never be silently swallowed.

The typical pattern for `#call` users is to always return `success` from their services and use `#call` to get the data hash directly. If a `failure` slips through, they get `nil`. If an `error` occurs, it raises - as it should.

`#call` trades the safety guarantee of `#result` for convenience. It exists as a deliberate opt-out, not as the default.

</cs-dita-concept-body>
