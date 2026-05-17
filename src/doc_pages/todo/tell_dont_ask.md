---
title: Tell Don't Ask
---

# Tell Don't Ask

TODO: Write article.

## Key idea

Tell Don't Ask means callers tell objects to do something rather than asking them for information to make decisions themselves. The decision lives inside the object that owns the condition, not in the caller.

`or_step` enforces this structurally — the caller cannot ask even if it wanted to.

## Example

Instead of `BuildUris` asking `ENV["SEQUENTIAL"] == "1"` and branching:

```ruby
# asking
def result
  if sequential?
    Services::BuildUrisSequentially.call(...)
  else
    Services::BuildUrisConcurrently.call(...)
  end
end
```

`BuildUris` tells `BuildUrisSequentially` to run, and that service decides for itself whether it can:

```ruby
# telling
step Services::BuildUrisSequentially,
  in: [:uris, :browser, :assets, :root, :logger]

or_step Services::BuildUrisConcurrently,
  in: [:uris, :browser, :assets, :pool, :root, :logger]
```

```ruby
class BuildUrisSequentially
  def result
    return failure("not in sequential mode") unless sequential?

    # ...
  end
end
```

The condition (`ENV["SEQUENTIAL"] == "1"`) lives inside the service that owns it. `BuildUris` knows nothing about it.

## Connection to `or_step`

The same pattern appears in `ResolveLocs`:

```ruby
step Services::ResolveLocsFromArgv,
  out: :locs

or_step Services::ResolveLocsFromSitemap,
  in: :root,
  out: :locs
```

`ResolveLocs` does not ask whether ARGV is populated — it tells `ResolveLocsFromArgv` to try, and that service decides by returning `failure("ARGV is empty")` when it cannot proceed.

`or_step` is Tell Don't Ask at the DSL level.
