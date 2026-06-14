
## How to load dynamic dependencies?

- There are multiple ways to load a dynamic dependency - lower and higher interfaces exist to support different levels of customization.

- Less customization needed, use a higher level; more customization needed, use a lower level.

- `dry-initializer` is used as an example below.

### Lowest level

- Call the plugin-level dependency query directly.

  ```ruby
  require "dry-initializer"
  require "convenient_service"

  ConvenientService::Dependencies.require_assigns_attributes_in_constructor_using_dry_initializer_plugin
  ```

- Config must include the plugin explicitly via `concerns` and/or middlewares (this example has no middlewares).

  ```ruby
  class AssertFileExists
    include ConvenientService::Standard::Config

    concerns do
      use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingDryInitializer::Concern
    end

    option :path

    def result
      return failure("File does not exist at path `#{path}`") unless File.exist?(path)

      success
    end
  end
  ```

### Higher level

- Call the config option dependency query directly after requiring `convenient_service`.

  ```ruby
  require "dry-initializer"
  require "convenient_service"

  ConvenientService::Dependencies.require_dry_initializer_standard_config_option
  ```

- Config uses `.with(:dry_initializer)`.

  ```ruby
  class AssertFileExists
    include ConvenientService::Standard::Config.with(:dry_initializer)

    option :path

    def result
      return failure("File does not exist at path `#{path}`") unless File.exist?(path)

      success
    end
  end
  ```

### Highest level

- Use the extra - it handles the full require chain internally.

  ```ruby
  require "dry-initializer"
  require "convenient_service"
  require "convenient_service/extras/standard/config/options/dry_initializer"
  ```

- Config uses `.with(:dry_initializer)` - same service code as Higher level.

- In all three levels above, `require "dry-initializer"` can be skipped since any CS helpers load it internally, but explicit loading is still good practice.

### See also

- [What are Convenient Service dynamic dependencies?](/docs/the_what/what_are_convenient_service_dynamic_dependencies.html)
