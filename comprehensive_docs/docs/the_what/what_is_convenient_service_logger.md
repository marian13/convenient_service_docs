
## What is Convenient Service logger?

- Convenient Service logger is a singleton that extends Ruby's stdlib [`Logger`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html). It is used by Convenient Service internally to emit log messages and is accessible via `ConvenientService.logger`.

  ```ruby
  ConvenientService.logger
  # => #<ConvenientService::Logger ...>
  ```

- It writes to [`STDOUT`](https://ruby-doc.org/core-2.7.0/IO.html#STDOUT) with a default log level of [`Logger::INFO`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#INFO). Messages below that threshold, such as [`Logger::DEBUG`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#DEBUG), are suppressed unless the level is lowered.

- The log level is controlled by two environment variables. `CONVENIENT_SERVICE_LOGGER_LEVEL` takes precedence over `CONVENIENT_SERVICE_DEBUG=true` when both are set.

  | Variable | Effect |
  |---|---|
  | `CONVENIENT_SERVICE_DEBUG=true` | Sets level to [`Logger::DEBUG`](https://ruby-doc.org/stdlib-2.7.0/libdoc/logger/rdoc/Logger.html#DEBUG) |
  | `CONVENIENT_SERVICE_LOGGER_LEVEL=<level>` | Sets level to the given value |

- Colored output is available by setting `CONVENIENT_SERVICE_LOGGER_ENABLE_COLORS=true`. It requires the [`paint`](https://github.com/janlelis/paint) gem. Each severity maps to a color:

  | Severity | Color |
  |---|---|
  | `DEBUG` | magenta bold |
  | `INFO` | cyan bold |
  | `WARN` | yellow bold |
  | `ERROR` | red bold |
  | `FATAL` | red underline |

### See also

- [How to configure Convenient Service logger?](/docs/the_how/how_to_configure_convenient_service_logger.html)
- [How to debug the Convenient Service lib itself?](/docs/the_how/how_to_debug_the_convenient_service_lib_itself.html)

### Sources

- [lib/convenient_service.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service.rb)
- [lib/convenient_service/logger.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/logger.rb)
