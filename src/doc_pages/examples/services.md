---
title: Service examples
---

# Service examples

<cs-react-island component="DocAxes" props='{"label":"Examples / Basic / Reference / Reference"}'></cs-react-island>

<cs-dita-short-description>

Copy-paste-ready CS service examples. Each example is a complete, working service.

</cs-dita-short-description>

<cs-dita-example>

## AssertFileExists {#assert-file-exists}

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

## AssertFileNotEmpty {#assert-file-not-empty}

```ruby
class AssertFileNotEmpty
  include ConvenientService::Standard::Config

  attr_reader :path

  def initialize(path:)
    @path = path
  end

  def result
    return error("Path is `nil`") if path.nil?
    return error("Path is empty") if path.empty?

    return failure("File is empty at path `#{path}`") if ::File.zero?(path)

    success
  end
end
```

## ReadFileContent {#read-file-content}

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

## FindUser {#find-user}

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
```

</cs-dita-example>

<cs-dita-related-links>

## Related

- [Service](/docs/entities/reference/service.html).
- [Regular service](/docs/entities/reference/regular_service.html).
- [Organizer service](/docs/entities/reference/organizer_service.html).

</cs-dita-related-links>
