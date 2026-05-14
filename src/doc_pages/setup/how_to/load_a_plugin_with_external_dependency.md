# How to load a plugin with external dependency?

<cs-react-island component="DocAxes" props='{"label":"Setup / Basic / How-to / Task"}'></cs-react-island>

<cs-dita-short-description>

How to require an external gem before using a CS plugin that depends on it.

</cs-dita-short-description>

<cs-dita-task-prerequisites>

## Prerequisites

- The gem is listed in your `Gemfile` and installed.
- You know which CS plugin you want to use.

</cs-dita-task-prerequisites>

<cs-dita-task-steps>

## Lower-level approach

1. Require the external gem before requiring CS.
2. Require CS.
3. Call the matching `ConvenientService::Dependencies` method to load the plugin files.
4. Wire the plugin into your config using `concerns` and `middlewares`.

```ruby
require "dry-initializer" # step 1 - require the external gem first

require "convenient_service" # step 2

ConvenientService::Dependencies.require_assigns_attributes_in_constructor_using_dry_initializer # step 3

module ApplicationService
  module Config
    include ConvenientService::Concern

    included do
      include ConvenientService::Standard::Config

      concerns do
        use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingDryInitializer::Concern
      end

      middlewares :initialize do
        use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingDryInitializer::Middleware
      end
    end
  end
end
```

## Higher-level approach

1. Require the extras file for the config option.
2. Use `ConvenientService::Standard::Config.with(:option_name)` in your config.

```ruby
require "convenient_service/extras/standard/config/options/dry_initializer" # step 1

module ApplicationService
  module Config
    include ConvenientService::Concern

    included do
      include ConvenientService::Standard::Config.with(:dry_initializer) # step 2
    end
  end
end
```

</cs-dita-task-steps>

<cs-dita-task-result>

## Result

Your service can use the plugin backed by the external gem. If the gem is missing, Ruby raises a [`LoadError`](https://ruby-doc.org/core-2.7.0/LoadError.html) at require time.

A service that includes the config can now use the plugin's features directly - in this case, `option` from [`dry-initializer`](https://dry-rb.org/gems/dry-initializer).

```ruby
class AssertFileExists
  include ApplicationService::Config

  option :path

  def result
    return failure("File does not exist at path `#{path}`") unless ::File.exist?(path)

    success
  end
end
```

</cs-dita-task-result>
