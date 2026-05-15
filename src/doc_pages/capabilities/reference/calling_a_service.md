# Calling a service

<cs-react-island component="DocAxes" props='{"label":"Capabilities / Basic / Reference / Reference"}'></cs-react-island>

<cs-dita-short-description>

A CS service can be invoked via `#result` or `#call`. Each returns a different representation of the outcome.

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

## Behavior

| Method | `success` | `failure` | `error` |
|---|---|---|---|
| `#result` | result object | result object | result object |
| `#call` | `data.to_h` | `nil` | raises `ErrorResultIsCalled` |

`#result` always returns a result object regardless of status. Accessing its data without checking the status first raises an exception.

`#call` unpacks the outcome directly. It treats `error` as exceptional - the same way a raised exception would surface - and does not swallow it as `nil`.

</cs-dita-reference-properties>

<cs-dita-example>

## Example

```ruby
class FindUser
  include ConvenientService::Standard::Config

  attr_reader :id

  def initialize(id:)
    @id = id
  end

  def result
    user = User.find_by(id: id)

    return failure("User not found") unless user

    success(user: user)
  end
end

##
# Using #result - status must be checked before accessing data.
#
result = FindUser.result(id: 1)

if result.success?
  puts result.data[:user]
end

##
# Using #call - data.to_h on success, nil on failure.
#
user_data = FindUser.call(id: 1)
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Service](/docs/entities/reference/service.html).
- [Why result raises when data is accessed without a status check](/docs/entities/explanations/result_status_check.html).
- [Always returning success](/docs/entities/explanations/always_returning_success.html).
</cs-dita-related-links>
