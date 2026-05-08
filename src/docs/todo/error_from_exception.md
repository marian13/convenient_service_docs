# error_from_exception

Available since CS 0.24.

`error_from_exception(exception)` converts an exception into a CS `error` result while preserving the full exception object — its class, message, and backtrace.

## Intent vs safety net

`fault_tolerance: true` in config is the last level of safety — it catches anything that slipped through and was not anticipated. `error_from_exception` is about intent: it signals that the developer thought about this specific failure mode and recognized that the underlying API necessarily raises by design — there is no non-raising alternative.

Think of it like `JSON.parse` or `Integer("abc")`: calling them can raise and there is nothing you can do about it. The right response is to own that and convert explicitly.

## When to use

Use `error_from_exception` in steps that call APIs that raise by design, where a non-raising variant does not exist:

```ruby
# Ferrum raises on network failure — no result-returning alternative
def NavigateToUri
  page.go_to(uri.to_s)
  page.network.wait_for_idle
  success
rescue => e
  error_from_exception(e)
end

# Retriable raises when retries are exhausted — inherent to the API
def WaitForIslandsToBeReady
  wait(seconds: 5) { page.evaluate("window.__cs__?.ready?.status") == "completed" }
  success
rescue => e
  error_from_exception(e)
end

# browser.create_page raises if the browser crashed or lost connection
def CreateBrowserPage
  success(page: browser.create_page)
rescue => e
  error_from_exception(e)
end
```

## What not to use it for

Do not add `error_from_exception` to every step just to be safe — that is what `fault_tolerance` is for. Reserve `error_from_exception` for steps where raising is the only possible outcome of failure from the wrapped API.
