---
tags:
  - dependencies
  - static
sources:
  - https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/dependencies/built_in.rb
  - https://github.com/marian13/convenient_service/blob/main/convenient_service.gemspec
  - https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/dependencies/extractions.rb
---

## What are Convenient Service static dependencies?

- Static dependencies are always loaded when `require "convenient_service"` is called.

- Static dependencies are grouped as built-in and extractions.

- The current state of static dependencies can be found at [`built_in.rb`](https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/dependencies/built_in.rb), [`extractions.rb`](https://github.com/marian13/convenient_service/blob/main/lib/convenient_service/dependencies/extractions.rb), and [`convenient_service.gemspec`](https://github.com/marian13/convenient_service/blob/main/convenient_service.gemspec).

### Built-in (Ruby standard library)

- Built-in dependencies ship with Ruby itself - no installation required.

- [`rubygems`](https://github.com/rubygems/rubygems), [`forwardable`](https://github.com/ruby/forwardable), [`pathname`](https://github.com/ruby/pathname), [`singleton`](https://github.com/ruby/singleton), [`thread`](https://ruby-doc.org/core-2.7.0/Mutex.html).

- [`set`](https://github.com/ruby/set) (Starting from Ruby 4.0, `Set` is a Ruby core class).

- [`logger`](https://github.com/ruby/logger) (Starting from Ruby 3.4, `logger` is no longer part of the default gems, so Convenient Service declares it as an explicit gem dependency).

### Extractions

- Extractions are portions of code copied from third-party gems and bundled directly inside Convenient Service, so no extra gems need to be installed.

- [`ActiveSupport::Concern`](https://github.com/rails/rails/blob/v7.0.4.3/activesupport/lib/active_support/concern.rb) - extracted from ActiveSupport v7.0.4.3.

- [`ActiveSupport::BacktraceCleaner`](https://github.com/rails/rails/blob/v7.1.2/activesupport/lib/active_support/backtrace_cleaner.rb) - extracted from ActiveSupport v7.1.2.

- [`ruby-middleware`](https://github.com/Ibsciss/ruby-middleware/tree/v0.4.2) - extracted from ruby-middleware v0.4.2.

### See also

- [What are Convenient Service dynamic dependencies?](/docs/the_what/what_are_convenient_service_dynamic_dependencies.html)
