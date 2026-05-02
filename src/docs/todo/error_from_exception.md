# error_from_exception

TODO: Document the `error_from_exception` method for converting exceptions into `error` results without losing information.

Currently services do:
```ruby
rescue => e
  error("Network unavailable — CDN assets will not load: #{e.message}")
end
```

This embeds only the message string, discarding the exception class and backtrace.

`error_from_exception` will wrap the exception properly so callers can inspect the original exception, its class, and its full backtrace when needed.
