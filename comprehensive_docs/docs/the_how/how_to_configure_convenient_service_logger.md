
## How to configure Convenient Service logger?

### Via code

- Set the log level programmatically via `ConvenientService.logger.level=`. The change takes effect immediately for the rest of the process.

  ```ruby
  ConvenientService.logger.level = Logger::DEBUG
  ```

  Valid levels, from most to least verbose: [`Logger::DEBUG`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#DEBUG), [`Logger::INFO`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#INFO), [`Logger::WARN`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#WARN), [`Logger::ERROR`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#ERROR), [`Logger::FATAL`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#FATAL), [`Logger::UNKNOWN`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#UNKNOWN).

### Via environment variables

- Set the log level via environment variable before running the script.

  ```bash
  CONVENIENT_SERVICE_LOGGER_LEVEL=DEBUG ruby your_script.rb
  ```

- Enable debug-level logging with `CONVENIENT_SERVICE_DEBUG=true`. When both are set, `CONVENIENT_SERVICE_LOGGER_LEVEL` takes precedence.

  ```bash
  CONVENIENT_SERVICE_DEBUG=true ruby your_script.rb
  ```

- Enable colored output with `CONVENIENT_SERVICE_LOGGER_ENABLE_COLORS=true`. Requires the [`paint`](https://github.com/janlelis/paint) gem.

  ```bash
  CONVENIENT_SERVICE_LOGGER_ENABLE_COLORS=true ruby your_script.rb
  ```

### See also

- [What is Convenient Service logger?](/docs/the_what/what_is_convenient_service_logger.html)
- [How to debug the Convenient Service lib itself?](/docs/the_how/how_to_debug_the_convenient_service_lib_itself.html)

### Sources

- [lib/convenient_service.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service.rb)
- [lib/convenient_service/logger.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/logger.rb)
