---
title: Regular service
---

# Regular service

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Reference / Reference"}'></cs-react-island>

<cs-dita-short-description>

A regular service is a class with one responsibility - to calculate and return a result of a logical operation. It implements `#result` directly and contains no steps.

</cs-dita-short-description>

<cs-dita-reference-syntax>

## Signature

```ruby
RegularService.result(...)
# => result object

RegularService.new(...).result
# => result object
```

</cs-dita-reference-syntax>

<cs-dita-reference-properties>

## Properties

| Property | Required | Description |
|---|---|---|
| Config | yes | Has a config like `ConvenientService::Standard::Config`. |
| `#result` method | yes | Implements the service logic directly, returning `success`, `failure`, or `error`. |
| Steps | no | Does not have any steps. |

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
    return error("Id is `nil`") if id.nil?

    user = User.find_by(id: id)

    return failure("User with id `#{id}` does not exist") unless user

    success(user: user)
  end
end

result = FindUser.result(id: 1)

if result.success?
  puts result.data[:user].id
else
  puts result.message
end
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Service](/docs/entities/reference/service.html).
- [Organizer service](/docs/entities/reference/organizer_service.html).
- [Calling a service](/docs/capabilities/reference/calling_a_service.html).
- [Result](/docs/entities/reference/result.html).
</cs-dita-related-links>

<cs-doc-reviewed date="2026-05-15"></cs-doc-reviewed>
