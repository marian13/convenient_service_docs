---
title: Naming the Last Step "result"
---

# Naming the Last Step "result"

TODO: Document the convention that when the last step performs the actual core logic of the service, it should be named `:result` rather than a descriptive name.

Example — instead of:

```ruby
step :convert_dist_path_to_parent,
  in: :dist_path,
  out: :dist_parent_path

def convert_dist_path_to_parent(dist_path:)
  success(dist_parent_path: File.dirname(dist_path))
end
```

Use:

```ruby
step :result,
  in: :dist_path,
  out: :dist_parent_path

def result
  success(dist_parent_path: File.dirname(dist_path))
end
```

The service name itself (`ConvertUriToDistParentPath`) already communicates the intent — the `:result` step just says "this is where it happens." Seen in the CS `RequestParams::Services::Prepare` example.
