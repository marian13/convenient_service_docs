# with_fallback

TODO: Document the `with_fallback` pattern — currently undocumented anywhere.

## Concept

A service should return `failure` when its goal is not achieved, even when skipping is an expected outcome. The caller then decides the policy via `.result.with_fallback`.

## How it works

`with_fallback` delegates to `with_failure_fallback`. When the result is `failure`, it calls `fallback_result` or `fallback_failure_result` on the service (own method, not inherited). When the result is `success` or `error`, it returns the original result unchanged.

Priority: `fallback_failure_result` > `fallback_result`.

## Example

`CollectAsset` goal is to collect an asset. If skipping is acceptable, define a `fallback_result` that returns `success`:

```ruby
class CollectAsset
  include Services::Configs::Practical::V1

  # ...

  def result
    return failure("Exchange has no response") if exchange.response.nil?
    return failure("Exchange is not from localhost") if request_uri.host != "localhost"
    return failure("Exchange is the page itself, not an asset") if exchange.request.url == uri.to_s

    assets.put_if_absent(request_uri, exchange.response.body)

    success
  end

  def fallback_result
    success
  end
end
```

The caller then decides:

```ruby
# Strict: failure is a problem, raises
Services::CollectAsset.call(exchange: exchange, uri: uri, assets: assets)

# Lenient: skip is acceptable, uses fallback_result
Services::CollectAsset.result(exchange: exchange, uri: uri, assets: assets).with_fallback
```

## Variants

- `with_failure_fallback` — fallback only on `failure`
- `with_error_fallback` — fallback only on `error` (uses `fallback_error_result` or `fallback_result`)
- `with_failure_and_error_fallback` — fallback on both
- `with_fallback_for(:failure)`, `with_fallback_for(:error)`, `with_fallback_for([:failure, :error])` — explicit form

## Key insight

This pattern lets a single service support two caller policies simultaneously:
- Strict: failure is a problem
- Lenient: failure is acceptable, fall back to `fallback_result`

The service stays honest about what happened. The caller decides what it means.
