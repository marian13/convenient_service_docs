# Concurrency Out of Scope

TODO: Write article.

## Decision

Convenient Service does not integrate concurrency primitives (thread pools, futures, fibers, async) into its DSL or API.

## Reasoning

Concurrency patterns vary too much to abstract cleanly:

- Thread pools, futures, fibers, async, actors — each has different semantics
- Cancellation behavior differs per model
- Error propagation differs per model
- Resource cleanup (pool shutdown, fiber termination) is model-specific

Providing a universal DSL would either be too opinionated (locking users into one model) or too leaky (exposing enough primitives that the abstraction adds no value).

## What CS does provide

`service_aware_enumerable` covers sequential iteration with full CS result semantics — `service_aware_each`, `service_aware_map`, `service_aware_filter`, etc. This is a well-defined, predictable scope.

## What users do themselves

Concurrency stays in user code where explicit choices can be made:

```ruby
def ProcessUris
  service_aware_enumerable(uris)
    .map { |uri| Concurrent::Future.execute(executor: pool) { Services::BuildUri.result(uri: uri, ...) } }
    .lazy
    .service_aware_map { |future| future.value!.tap { |result| pool.kill if result.not_success? } }
    .result
ensure
  pool.shutdown
  pool.wait_for_termination
end
```

The user chooses the concurrency model, controls cancellation, and manages cleanup. CS provides `service_aware_enumerable` and `service_aware_map` as the bridge between the concurrent results and the CS pipeline.
