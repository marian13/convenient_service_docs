
## How to load active_model_validations standard config option?

- Enables `validates` DSL for service result params validation via [`active_model`](https://github.com/rails/rails/tree/main/activemodel).

- Require `convenient_service` and the extra.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/standard/config/options/active_model_validations"
  ```

- Services can now use `validates` and `.with(:active_model_validations)`.

  ```ruby
  class Service
    include ConvenientService::Standard::Config.with(:active_model_validations)

    attr_reader :foo

    validates :foo, presence: true

    def initialize(foo:)
      @foo = foo
    end

    def result
      success
    end
  end

  Service.result(foo: nil)
  # => <Service::Result status: :error, data_keys: [:foo], message: "foo can't be blank">

  Service.result(foo: :bar)
  # => <Service::Result status: :success>
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
