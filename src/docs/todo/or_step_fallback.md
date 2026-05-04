# or_step Fallback

TODO: Write article.

## Key idea

`or_step` lets you declare preference order between alternative sources without writing any conditional logic in the composing service.

It only fires when the previous step returns `failure` — that's the contract. A service returning `failure` is not an error; it's a signal that says "this path doesn't apply, try another."

## Example

```ruby
class ResolveLocsFromArgv
  include Services::Configs::Practical::V1

  def result
    return failure("ARGV is empty") unless ARGV.any?

    success(locs: ARGV)
  end
end
```

```ruby
class ResolveLocsFromSitemap
  include Services::Configs::Practical::V1

  option :root

  validates :root, presence: true

  step Services::ReadFileContent,
    in: {path: :sitemap_path},
    out: :content

  step Services::ParseSitemapXml,
    in: :content,
    out: :locs

  step :result,
    in: :locs,
    out: :locs

  private

  memo_wise def sitemap_path
    File.join(root, "src", "sitemap.xml")
  end

  def result
    success(locs: locs)
  end
end
```

```ruby
class ResolveLocs
  include Services::Configs::Practical::V1

  option :root

  validates :root, presence: true

  step Services::ResolveLocsFromArgv,
    out: :locs

  or_step Services::ResolveLocsFromSitemap,
    in: :root,
    out: :locs
end
```

`ResolveLocs` has no conditionals, no parsing logic, no private methods. It declares the preference order; the leaf services handle the details.

If `ResolveLocsFromArgv` returned `success(locs: [])` for an empty ARGV, `or_step` would never fire. The explicit `failure` is what makes the fallback work.
