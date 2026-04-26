# TODO

- [ ] Add a way to build a single page (e.g. `task build page=/docs/test.html`)

## Crawlers with fail-fast support

Continue implementing `crawlers` with SizedQueue + threads and real fail-fast.

### Crawler class

```ruby
class Crawler
  attr_reader :url

  def initialize(url:, success:)
    @url = url
    @success = success
  end

  def success?
    @success
  end
end
```

### crawlers method

```ruby
def crawlers
  @crawlers ||= Enumerator.new do |collection|
    semaphore = SizedQueue.new(pool_size)
    completion = Queue.new

    dynamic_urls.each do |url|
      semaphore.push(:token)

      Thread.new do
        build_url(url)
        completion.push(Crawler.new(url: url, success: true))
      rescue
        completion.push(Crawler.new(url: url, success: false))
      ensure
        semaphore.pop
      end
    end

    dynamic_urls.size.times { collection << completion.pop }
  end
end
```

### run loop

```ruby
loop do
  crawler = crawlers.next

  break unless crawler
  next unless fail_fast?
  break unless crawler.success?
end
```
