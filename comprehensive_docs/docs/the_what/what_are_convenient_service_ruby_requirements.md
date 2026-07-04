
## What are Convenient Service's Ruby requirements?

- Minimal: [Ruby 2.7](https://ruby-lang.org/en/documentation/installation/#asdf-vm).

- Recommended: [Ruby 3+](https://ruby-lang.org/en/documentation/installation/#asdf-vm).

- Ruby 2.7 has known [`*args`/`**kwargs` separation issues](https://www.ruby-lang.org/en/news/2019/12/12/separation-of-positional-and-keyword-arguments-in-ruby-3-0/) that Convenient Service [works around internally](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/core/entities/config/entities/method_middlewares/entities/caller/commands/define_method_callers.rb#L122).

- [Service-aware enumerables](/docs/the_what/what_are_service_aware_enumerables.html) only define [`compact`](https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-compact), [`chain`](https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-chain), [`inject`](https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-inject), and [`include?`](https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-include-3F) on Ruby 3.1+. Calling them on a service-aware enumerable under Ruby 2.7 or 3.0 raises `NoMethodError`.

  ```ruby
  class Service
    include ConvenientService::Standard::Config

    def result
      service_aware_enumerable([0, 1, false, true, nil])
        .compact
        .result
    end
  end

  Service.result.data[:values]
  # => [0, 1, false, true] on Ruby 3.1+, NoMethodError otherwise
  ```

- [JRuby](https://www.jruby.org/) 9.4 and 10.0 are fully supported - all specs pass in CI; 10.1 is not tested yet.

- [TruffleRuby](https://github.com/oracle/truffleruby) does not work - too many specs currently fail, so 25.0 only runs in CI experimentally (allowed to fail).

### Sources

- [convenient_service.gemspec](https://github.com/marian13/convenient_service/blob/v0.24.0/convenient_service.gemspec)
- [.github/workflows/ci.yml](https://github.com/marian13/convenient_service/blob/v0.24.0/.github/workflows/ci.yml)
- [lib/convenient_service/core/entities/config/entities/method_middlewares/entities/caller/commands/define_method_callers.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/core/entities/config/entities/method_middlewares/entities/caller/commands/define_method_callers.rb)
- [lib/convenient_service/service/plugins/can_have_service_aware_enumerables/entities/service_aware_enumerables/enumerable.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/can_have_service_aware_enumerables/entities/service_aware_enumerables/enumerable.rb)
