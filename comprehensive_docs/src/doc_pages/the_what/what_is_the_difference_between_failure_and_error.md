---
tags:
  - result
  - services
sources:
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/concern/instance_methods.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/entities/status/concern/instance_methods.rb
---

## What is the difference between `failure` and `error`?

- Both `failure` and `error` are statuses a [result](/docs/the_what/what_is_a_result.html) can have, alongside `success`. They are inspired by [JSend](https://github.com/omniti-labs/jsend), but not JSend-compatible.

- `error` signals a contract violation - the caller passed something invalid or missing that should never happen when the service is used correctly (a blank required argument, an unsupported option value). It is the "you called me wrong" status.

- `failure` signals that the input itself was valid, but a business condition was not satisfied (a file that does not exist, a status code that could not be parsed out of otherwise well-formed data). It is the "you called me right, but this particular attempt did not work out" status.

- To decide between the two, ask: did the caller do something wrong, or did the caller do everything right but the attempt still not succeed? The former is `error`, the latter is `failure`.

### File existence example

- The same service commonly returns both, for different checks:

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

      return failure("File with path `#{path}` does NOT exist") unless ::File.exist?(path)

      success
    end
  end

  AssertFileExists.result(path: nil).error?
  # => true

  AssertFileExists.result(path: "not_existing_path").failure?
  # => true
  ```

- `path` being `nil` or empty is a contract violation the caller controls directly - hence `error`. But a valid, non-empty path that simply does not exist on disk is a business condition unrelated to how the caller called the service - hence `failure`.

### HTTP status code example

- A service that parses an HTTP status code out of `curl`'s raw output, using its `--write-out` (`-w`) format string (e.g. `%{http_code}`) to append the status code after the response body. An absent argument and an unsupported output format are both contract violations (`error`), while a well-formed response that still fails to yield a parseable code is a `failure`:

  ```ruby
  class ExtractHttpCode
    include ConvenientService::Standard::Config

    attr_reader :response, :write_out_format

    def initialize(response:, write_out_format:)
      @response = response
      @write_out_format = write_out_format
    end

    def result
      return error("Response is `nil`") if response.nil?
      return error("Write out format is `nil` or empty") if write_out_format.nil? || write_out_format.empty?
      return error("Unsupported write out format: `#{write_out_format}`") unless write_out_format.start_with?("\n")

      http_code = Integer(response.stdout.split("\n").last, exception: false)

      return failure("Unable to extract `http_code` from `stdout`: `#{response.stdout}`") unless http_code

      success(http_code: http_code)
    end
  end

  Response = Struct.new(:stdout)

  ExtractHttpCode.result(response: nil, write_out_format: "\n%{http_code}").error?
  # => true

  ExtractHttpCode.result(response: Response.new("some body"), write_out_format: "%{http_code}").error?
  # => true

  ExtractHttpCode.result(response: Response.new("some non-numeric output"), write_out_format: "\n%{http_code}").failure?
  # => true

  ExtractHttpCode.result(response: Response.new("<html>...</html>\n200"), write_out_format: "\n%{http_code}").success?
  # => true
  ```

- `write_out_format` being `nil`/empty, or not matching curl's leading-newline convention, are both contract violations the caller controls directly - hence `error`. But an unparseable `http_code` can happen even when the caller did everything right (the format was valid, the response was well-formed) - the extraction itself just did not yield a usable value, hence `failure`.

### See also

- [What is a result?](/docs/the_what/what_is_a_result.html)

### Sources

- [lib/convenient_service/service/plugins/has_j_send_result/concern/instance_methods.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/concern/instance_methods.rb)
- [lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/entities/status/concern/instance_methods.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/entities/status/concern/instance_methods.rb)
