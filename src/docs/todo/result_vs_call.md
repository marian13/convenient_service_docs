# result vs call

TODO: Explain the difference between invoking `.result` and `.call` on a Convenient Service service.

- `.result` — always returns a result object (`success`, `failure`, `error`); caller must check and handle each case
- `.call` — raises on failure/error, use when you want exception-style control flow
