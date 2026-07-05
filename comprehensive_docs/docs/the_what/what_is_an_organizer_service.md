
## What is an organizer service?

- An organizer service composes other services (or methods) via `step`s. If any step is not successful, the pipeline stops and that step's result is returned as the whole service's result.

  ```ruby
  class AssertFileExists
    include ConvenientService::Standard::Config

    attr_reader :path

    def initialize(path:)
      @path = path
    end

    def result
      return failure("File does not exist at path `#{path}`") unless File.exist?(path)

      success
    end
  end

  class AssertFileNotEmpty
    include ConvenientService::Standard::Config

    attr_reader :path

    def initialize(path:)
      @path = path
    end

    def result
      return failure("File is empty at path `#{path}`") if File.empty?(path)

      success
    end
  end

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
      success(content: File.read(path))
    end
  end
  ```

- If `AssertFileExists` fails, the pipeline stops there - `AssertFileNotEmpty` and `step :result` never run.

  ```ruby
  result = ReadFileContent.result(path: "/tmp/non_existent.txt")

  result.success?
  # => false

  result.original_service.class
  # => AssertFileExists
  ```

- The same applies to `AssertFileNotEmpty` - when it fails, `step :result` is skipped.

  ```ruby
  result = ReadFileContent.result(path: "/tmp/empty.txt")

  result.success?
  # => false

  result.original_service.class
  # => AssertFileNotEmpty
  ```

- When every step succeeds, `ReadFileContent` returns the final `step :result` result.

  ```ruby
  result = ReadFileContent.result(path: "/tmp/hello.txt")

  result.success?
  # => true

  result.data[:content]
  # => "Hello!"
  ```

- An organizer service is contrasted with a [regular service](/docs/the_what/what_is_a_regular_service.html), which implements `result` directly instead of composing steps.

### See also

- [What is a service?](/docs/the_what/what_is_a_service.html)
- [What is a regular service?](/docs/the_what/what_is_a_regular_service.html)
- [What is a result?](/docs/the_what/what_is_a_result.html)

### Sources

- [lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_step/concern.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_step/concern.rb)
