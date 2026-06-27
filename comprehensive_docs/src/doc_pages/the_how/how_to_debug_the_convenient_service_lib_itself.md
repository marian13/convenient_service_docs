---
tags:
  - debugging
  - logger
sources:
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/dependencies/queries.rb
  - https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/logger.rb
---

## How to debug the Convenient Service lib itself?

- When something behaves unexpectedly and you suspect a bug in Convenient Service, enable debug mode by setting `CONVENIENT_SERVICE_DEBUG=true` before running your script.

  ```bash
  CONVENIENT_SERVICE_DEBUG=true ruby your_script.rb
  ```

  This automatically sets the Convenient Service internal logger level to [`Logger::DEBUG`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#DEBUG), producing verbose log output and full backtraces.

- To check at runtime whether debug mode is active, call `ConvenientService.debug?`.

  ```ruby
  require "convenient_service"

  ConvenientService.debug?
  # => false
  ```

  ```bash
  CONVENIENT_SERVICE_DEBUG=true ruby your_script.rb
  ```

  ```ruby
  require "convenient_service"

  ConvenientService.debug?
  # => true
  ```

- To enable verbose logging without the environment variable, set the logger level directly.

  ```ruby
  require "convenient_service"

  ConvenientService.logger.level = Logger::DEBUG
  ```

- To step through Convenient Service source code with a debugger, open the gem in your editor with [`bundle open`](https://bundler.io/man/bundle-open.1.html).

  ```bash
  bundle open convenient_service
  ```

  Add [`binding.break`](https://github.com/ruby/debug) at the suspect location, then trigger the code path via [`irb`](https://github.com/ruby/irb), Rails console, [RSpec](https://rspec.info/), or [Rake](https://github.com/ruby/rake). Remove the breakpoint after debugging.

  ```ruby
  binding.break
  ```

- [`binding.pry`](https://github.com/pry/pry) is a REPL, not a debugger - use [`binding.break`](https://github.com/ruby/debug), [`byebug`](https://github.com/deivid-rodriguez/byebug), or extend pry with [`pry-byebug`](https://github.com/deivid-rodriguez/pry-byebug) or similar when you need to step through code.

### See also

- [What are Convenient Service dependencies?](/docs/the_what/what_are_convenient_service_dependencies.html)
- [What is Convenient Service logger?](/docs/the_what/what_is_convenient_service_logger.html)
- [How to configure Convenient Service logger?](/docs/the_how/how_to_configure_convenient_service_logger.html)

### Sources

- [lib/convenient_service.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service.rb)
- [lib/convenient_service/dependencies/queries.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/dependencies/queries.rb)
- [lib/convenient_service/logger.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/logger.rb)
