---
title: Memoized Private Methods in Step `in:`
---

# Memoized Private Methods in Step `in:`

TODO: Document the pattern of using memoized private methods as inputs to steps instead of creating dedicated resolver steps.

## Before (dedicated step for simple computation)

```ruby
step :resolve_source_uri,
  out: :source_uri

step Services::FetchHttpResponse,
  in: {uri: :source_uri},
  out: :body

private

def resolve_source_uri
  success(source_uri: URI("http://localhost:#{port}/sitemap.xml"))
end
```

## After (memoized private method referenced directly in `in:`)

```ruby
step Services::FetchHttpResponse,
  in: {uri: :source_uri},
  out: :body

private

memo_wise def source_uri
  URI("http://localhost:#{port}/sitemap.xml")
end
```

## When to use

- The computation is a single expression with no branching
- The value does not need to be passed `out:` to subsequent steps
- The method name is clear enough to serve as documentation

## When to keep a dedicated step

- The computation has branching logic
- The result needs to be shared across multiple downstream steps via `out:`
- Failure is possible and should short-circuit the pipeline
