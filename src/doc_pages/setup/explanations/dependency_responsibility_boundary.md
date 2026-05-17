---
title: Dependency responsibility boundary
---

# Dependency responsibility boundary

<cs-react-island component="DocAxes" props='{"label":"Setup / Basic / Explanation / Concept"}'></cs-react-island>

<cs-dita-short-description>

Convenient Service core depends only on the Ruby standard library. No external gems are required to use it.

</cs-dita-short-description>

<cs-dita-concept-body>

## Plugins are optional extensions

CS functionality is extended through plugins. A _plugin_ is an optional module that adds a specific capability to services - constructor injection, memoization, validations, and so on.

Some plugins wrap external gems.

- `AssignsAttributesInConstructor::UsingDryInitializer` wraps the [`dry-initializer`](https://dry-rb.org/gems/dry-initializer) gem. 
- `HasMemoization::UsingMemoWise` wraps [`memo_wise`](https://github.com/panorama-ed/memo_wise).
- `HasJSendResultParamsValidations::UsingActiveModelValidations` wraps [`activemodel`](https://rubygems.org/gems/activemodel).

## Who is responsible for external dependencies

When you use a plugin that wraps an external gem, requiring that gem is your responsibility. CS assumes the gem is already available - it does not auto-require it.

This means two things in practice. First, add the gem to your `Gemfile`. Second, require it before CS loads the plugin that depends on it.

If the gem is missing and you use its plugin, Ruby will raise a [`LoadError`](https://ruby-doc.org/core-2.7.0/LoadError.html). CS will not give a more specific error - the [`LoadError`](https://ruby-doc.org/core-2.7.0/LoadError.html) is the signal.

## Why CS works this way

Bundling external dependencies into CS core would force every user to install gems they may not need. Instead, CS stays minimal by default and lets you opt in to each external dependency explicitly.

This also means CS does not dictate gem versions. You choose the version of [`dry-initializer`](https://dry-rb.org/gems/dry-initializer), [`memo_wise`](https://github.com/panorama-ed/memo_wise), or [`activemodel`](https://rubygems.org/gems/activemodel) that fits your project.

</cs-dita-concept-body>
