# Dependency responsibility boundary

> Basic / Explanation / Concept topic

Convenient Service core depends only on the Ruby standard library. No external gems are required to use it.

## Plugins are optional extensions

CS functionality is extended through plugins. A _plugin_ is an optional module that adds a specific capability to services — constructor injection, memoization, validations, and so on.

Some plugins wrap external gems. The `dry_initializer` plugin wraps the [`dry-initializer`](https://dry-rb.org/gems/dry-initializer) gem. The `memo_wise` plugin wraps [`memo_wise`](https://github.com/panorama-ed/memo_wise). The `active_model_validations` plugin wraps [`activemodel`](https://rubygems.org/gems/activemodel).

## Who is responsible for external dependencies

When you use a plugin that wraps an external gem, requiring that gem is your responsibility. CS assumes the gem is already available — it does not auto-require it.

This means two things in practice. First, add the gem to your `Gemfile`. Second, require it before CS loads the plugin that depends on it.

If the gem is missing and you use its plugin, Ruby will raise a `LoadError`. CS will not give a more specific error — the `LoadError` is the signal.

## Why CS works this way

Bundling external dependencies into CS core would force every user to install gems they may not need. Instead, CS stays minimal by default and lets you opt in to each external dependency explicitly.

This also means CS does not dictate gem versions. You choose the version of `dry-initializer`, `memo_wise`, or `activemodel` that fits your project.
