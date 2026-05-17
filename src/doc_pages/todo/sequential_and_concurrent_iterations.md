---
title: Sequential and Concurrent Iterations
---

# Sequential and Concurrent Iterations

TODO: Write article.

## Sequential iteration

```ruby
def ProcessUris
  return failure("not in sequential mode") unless sequential?

  service_aware_enumerable(uris)
    .service_aware_each { |uri|
      step Services::BuildUri,
        in: [uri: -> { uri }, browser: -> { browser }, assets: -> { assets }, root: -> { root }, logger: -> { logger }]
    }
    .result
end
```

Stops on the first not-success result. No manual rescue needed — error propagation is handled by `service_aware_each`.

## Concurrent iteration

```ruby
def ProcessUris
  service_aware_enumerable(uris)
    .map { |uri| Concurrent::Future.execute(executor: pool) { Services::BuildUri.result(uri: uri, browser: browser, assets: assets, root: root, logger: logger) } }
    .lazy
    .service_aware_map { |future| future.value!.tap { |result| pool.kill if result.not_success? } }
    .result
ensure
  pool.shutdown
  pool.wait_for_termination
end
```

- `.map` — submits all futures to the pool eagerly so all URIs start processing immediately
- `.lazy` — defers waiting for results until `service_aware_map` consumes them
- `.service_aware_map` — waits for each future and propagates its result through the CS pipeline; kills the pool on not-success to stop remaining queued work
- `ensure` — guarantees pool cleanup regardless of success or error

## Key differences

| | Sequential | Concurrent |
|---|---|---|
| Processing | One URI at a time | All URIs dispatched immediately |
| Stop on failure | Immediate | Kills pool, running futures may still complete |
| Block style | `step` DSL | `future.value!` |
| Cleanup | None needed | `pool.shutdown` + `pool.wait_for_termination` |
