---
title: SaveUrl: Refactor to Use Steps
---

# SaveUrl: Refactor to Use Steps

TODO: Rewrite `SaveUrl` using the Convenient Service `step` DSL.

## Current version (manual result composition)

```ruby
# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "resolve_dist_path"
require_relative "touch_folder"
require_relative "write_file"

module Services
  class SaveUrl
    include Services::Configs::Practical::V1

    option :url
    option :content
    option :root
    option :logger

    validates :url, presence: true
    validates :content, presence: true
    validates :root, presence: true
    validates :logger, presence: true

    def result
      dist_path = Services::ResolveDistPath.call(url: url, root: root)[:path]

      Services::TouchFolder.call(path: File.dirname(dist_path))

      Services::WriteFile.call(path: dist_path, content: content)

      logger.info { "built #{dist_path.delete_prefix("#{root}/")}" }

      success
    end
  end
end
```

## Step-based version (private methods for transformations)

```ruby
# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "resolve_dist_path"
require_relative "touch_folder"
require_relative "write_file"

module Services
  class SaveUrl
    include Services::Configs::Practical::V1

    option :url
    option :content
    option :root
    option :logger

    validates :url, presence: true
    validates :content, presence: true
    validates :root, presence: true
    validates :logger, presence: true

    step Services::ResolveDistPath,
      in: [:url, :root],
      out: :dist_path

    step :resolve_dist_folder_path,
      in: :dist_path,
      out: :dist_folder_path

    step Services::TouchFolder,
      in: {path: :dist_folder_path}

    step Services::WriteFile,
      in: [{path: :dist_path}, :content]

    step :log_built,
      in: [:dist_path, :root]

    private

    def resolve_dist_folder_path(dist_path:)
      success(dist_folder_path: File.dirname(dist_path))
    end

    def log_built(dist_path:, root:)
      logger.info { "built #{dist_path.delete_prefix("#{root}/")}" }

      success
    end
  end
end
```

Notes:
- `resolve_dist_folder_path` — private method step for `File.dirname` transformation between steps
- `log_built` — private method step for side-effect logging that doesn't fit a reusable service
- `logger` is accessed directly from the option, not passed via `in:`, since it's available on `self`

## Step-based version (with after :result callback and ResolveDistFolderPath service)

```ruby
# frozen_string_literal: true

require_relative "configs/practical/v1"
require_relative "resolve_dist_path"
require_relative "resolve_dist_folder_path"
require_relative "touch_folder"
require_relative "write_file"

module Services
  class SaveUrl
    include Services::Configs::Practical::V1

    option :url
    option :content
    option :root
    option :logger

    validates :url, presence: true
    validates :content, presence: true
    validates :root, presence: true
    validates :logger, presence: true

    step Services::ResolveDistPath,
      in: [:url, :root],
      out: :dist_path

    step Services::ResolveDistFolderPath,
      in: :dist_path,
      out: :dist_folder_path

    step Services::TouchFolder,
      in: {path: :dist_folder_path}

    step Services::WriteFile,
      in: [{path: :dist_path}, :content]

    after :result do |result|
      logger.info { "built #{dist_path.delete_prefix("#{root}/")}" } if result.success?
    end
  end
end
```

Notes:
- `resolve_dist_folder_path` private method step extracted into `ResolveDistFolderPath` service
- `log_built` step replaced with `after :result` callback — logging is a side effect, not a pipeline step
- `after :result` has access to all options and step outputs directly on `self`
