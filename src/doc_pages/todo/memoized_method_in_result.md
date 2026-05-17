---
title: Memoized Private Methods in result
---

# Memoized Private Methods in result

TODO: Document the pattern of extracting intermediate computations inside `result` into memoized private methods.

## Before

```ruby
def result
  return failure("Exchange has no response") if exchange.response.nil?

  request_uri = URI.parse(exchange.request.url)

  return failure("Exchange is not from localhost") if request_uri.host != "localhost"
  return failure("Exchange is the page itself, not an asset") if exchange.request.url == uri.to_s

  assets.put_if_absent(request_uri, exchange.response.body)

  success
end
```

## After

```ruby
def result
  return failure("Exchange has no response") if exchange.response.nil?
  return failure("Exchange is not from localhost") if request_uri.host != "localhost"
  return failure("Exchange is the page itself, not an asset") if exchange.request.url == uri.to_s

  assets.put_if_absent(request_uri, exchange.response.body)

  success
end

private

memo_wise def request_uri
  URI.parse(exchange.request.url)
end
```

## Benefits

- Guard clauses read as a flat, uninterrupted list — easier to scan
- Intermediate computation is named and reusable
- Memoization avoids redundant computation when the value is referenced multiple times
