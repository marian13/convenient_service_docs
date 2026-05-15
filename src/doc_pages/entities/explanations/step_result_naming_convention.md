# Why the last step is named `:result`

<cs-react-island component="DocAxes" props='{"label":"Entities / Basic / Explanation / Concept"}'></cs-react-island>

<cs-dita-short-description>

The `:result` step name is a convention that avoids duplicating the service class name while making the core logic step self-evident.

</cs-dita-short-description>

<cs-dita-concept-body>

## The naming problem in organizer services

An organizer service is named after what it does - `ReadFileContent`. Its steps guard the preconditions first, then the final step does the actual work.

That final step is a method step. What should it be named?

Naming it after the service - `step :read_file_content` - duplicates information already in the class name. Naming it something else - `step :read` or `step :perform` - is vague and loses meaning.

## The `:result` convention

The convention is to name the final method step `:result`. This works because `step :result` calls the `#result` instance method - and a service's `#result` method is defined as the method that does what the service class name states.

```ruby
class ReadFileContent
  include ConvenientService::Standard::Config

  attr_reader :path

  def initialize(path:)
    @path = path
  end

  step AssertFileExists, in: :path
  step AssertFileNotEmpty, in: :path
  step :result, in: :path, out: :content  ## calls #result below

  def result
    success(content: ::File.read(path))
  end
end
```

The name `:result` signals: this is the step that fulfills the service's stated purpose. All previous steps are guards; this one is the work.

## Why this works

This convention is inspired by "tell, don't ask" - the service class name tells you what it does, and `:result` is where that happens. A reader scanning the step list sees the guards first and the core operation last, without needing to know the service name to understand the sequence.

</cs-dita-concept-body>

<cs-dita-related-links>

## Related

- [Organizer service](/docs/entities/reference/organizer_service.html).
- [Regular service](/docs/entities/reference/regular_service.html).
</cs-dita-related-links>
