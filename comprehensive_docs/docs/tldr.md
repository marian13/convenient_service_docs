
# TL;DR

> I have no time to read tons of docs.
> Just show me an example use case and I'll quickly craft something similar 😎.
>
> — A lazy and productive developer.

<cs-dita-short-description>

A complete working example of a Convenient Service usage - from setup to executing a service.

</cs-dita-short-description>

Using `.result` - handle all three statuses explicitly:

```ruby
# Any source code in the project.
def read_file_content(path)
  result = ReadFileContent.result(path: path)

  if result.success?
    ##
    # Service tried to read the file content and completed it.
    #
    result.data[:content] # File content.
  elsif result.failure?
    ##
    # Service tried to read file content, but did NOT complete it due to some expected reason.
    #
    App.logger.warn { result.message.to_s }

    "" # Fallback value or any other reasonable fallback behavior.
  else # result.error?
    ##
    # Service NOT even tried to complete reading of file content due to a validation issue or exception.
    #
    App.logger.error { result.message.to_s }

    raise VerboseException, result.message.to_s # Self-explanatory exception or any other reasonable exception handling behavior.
  end
end
```

Using `.call` - returns `data.to_h` on success, `nil` on failure, raises on error:

```ruby
# Any source code in the project.
def read_file_content(path)
  ReadFileContent.call(path: path)&.fetch(:content) || ""
end
```

Installation.

```ruby
gem "convenient_service", "1.0.0"
```

Setup.

<cs-react-island component="Tabs" props='{"tabs":[{"label":"Standard","content":"```ruby\nrequire \"convenient_service\"\n```"},{"label":"Rails","content":"```ruby\nrequire \"active_model\" # NOTE: Minimal `active_model` version - `5.2.0`.\n\nrequire \"convenient_service\"\n\nrequire \"convenient_service/extras/standard/config/options/active_model_attribute_assignment\"\nrequire \"convenient_service/extras/standard/config/options/active_model_attributes\"\nrequire \"convenient_service/extras/standard/config/options/active_model_validations\"\n```"},{"label":"Dry","content":"```ruby\nrequire \"dry-initializer\" # NOTE: Minimal `dry-initializer` version - `3.0.0`.\nrequire \"dry-validation\" # NOTE: Minimal `dry-validation` version - `1.5.0`.\n\nrequire \"convenient_service\"\n\nrequire \"convenient_service/extras/standard/config/options/dry_initializer\"\nrequire \"convenient_service/extras/standard/config/options/dry_validation\"\n```"},{"label":"Custom","content":"```ruby\nrequire \"active_model\" # NOTE: Minimal `active_model` version - `5.2.0`.\nrequire \"dry-initializer\" # NOTE: Minimal `dry-initializer` version - `3.0.0`.\nrequire \"awesome_print\" # NOTE: Minimal `awesome_print` version - `1.0.0`.\n\nrequire \"convenient_service\"\n\nrequire \"convenient_service/extras/standard/config/options/active_model_validations\"\nrequire \"convenient_service/extras/standard/config/options/dry_initializer\"\nrequire \"convenient_service/extras/standard/config/options/awesome_print_inspect\" if Rails.env.development? || Rails.env.test?\n```"}]}'></cs-react-island>

Config.

<cs-react-island component="Tabs" props='{"tabs":[{"label":"Standard","content":"```ruby\nmodule ApplicationService\n  module Config\n    include ConvenientService::Config\n\n    included do\n      include ConvenientService::Standard::Config\n    end\n  end\nend\n```"},{"label":"Rails","content":"```ruby\nmodule RailsService\n  module Config\n    include ConvenientService::Config\n\n    included do\n      include ConvenientService::Standard::Config\n        .with(\n          :active_model_attribute_assignment,\n          :active_model_attributes,\n          :active_model_validations\n        )\n    end\n  end\nend\n```"},{"label":"Dry","content":"```ruby\nmodule DryService\n  module Config\n    include ConvenientService::Config\n\n    included do\n      include ConvenientService::Standard::Config\n        .with(\n          :dry_initializer,\n          :dry_validation\n        )\n    end\n  end\nend\n```"},{"label":"Custom","content":"```ruby\nmodule CustomService\n  module Config\n    include ConvenientService::Config\n\n    included do\n      include ConvenientService::Standard::Config\n        .with(\n          :dry_initializer,\n          :active_model_validations,\n          awesome_print_inspect: Rails.env.local?\n        )\n        .without(\n          fault_tolerance: Rails.env.test?\n        )\n    end\n  end\nend\n```"}]}'></cs-react-island>

Regular service example.

<cs-react-island component="Tabs" props='{"tabs":[{"label":"Standard","content":"```ruby\nclass AssertFileExists\n  include ApplicationService::Config\n\n  attr_reader :path\n\n  def initialize(path:)\n    @path = path\n  end\n\n  def result\n    return error(\"Path is `nil`\") if path.nil?\n    return error(\"Path is empty\") if path.empty?\n\n    return failure(\"File does not exist at path `#{path}`\") unless File.exist?(path)\n\n    success\n  end\nend\n```"},{"label":"Rails","content":"```ruby\nclass AssertFileExists\n  include RailsService::Config\n\n  attribute :path, :string\n\n  validates :path, presence: true\n\n  def result\n    return failure(\"File does not exist at path `#{path}`\") unless File.exist?(path)\n\n    success\n  end\nend\n```"},{"label":"Dry","content":"```ruby\nclass AssertFileExists\n  include DryService::Config\n\n  option :path\n\n  contract do\n    schema do\n      required(:path).value(:string)\n    end\n  end\n\n  def result\n    return failure(\"File does not exist at path `#{path}`\") unless File.exist?(path)\n\n    success\n  end\nend\n```"},{"label":"Custom","content":"```ruby\nclass AssertFileExists\n  include CustomService::Config\n\n  option :path\n\n  validates :path, presence: true\n\n  def result\n    return failure(\"File does not exist at path `#{path}`\") unless File.exist?(path)\n\n    success\n  end\nend\n```"}]}'></cs-react-island>

One more regular service example.

<cs-react-island component="Tabs" props='{"tabs":[{"label":"Standard","content":"```ruby\nclass AssertFileNotEmpty\n  include ApplicationService::Config\n\n  attr_reader :path\n\n  def initialize(path:)\n    @path = path\n  end\n\n  def result\n    return error(\"Path is `nil`\") if path.nil?\n    return error(\"Path is empty\") if path.empty?\n\n    return failure(\"File is empty at path `#{path}`\") if File.zero?(path)\n\n    success\n  end\nend\n```"},{"label":"Rails","content":"```ruby\nclass AssertFileNotEmpty\n  include RailsService::Config\n\n  attribute :path, :string\n\n  validates :path, presence: true\n\n  def result\n    return failure(\"File is empty at path `#{path}`\") if File.zero?(path)\n\n    success\n  end\nend\n```"},{"label":"Dry","content":"```ruby\nclass AssertFileNotEmpty\n  include DryService::Config\n\n  option :path\n\n  contract do\n    schema do\n      required(:path).value(:string)\n    end\n  end\n\n  def result\n    return failure(\"File is empty at path `#{path}`\") if File.zero?(path)\n\n    success\n  end\nend\n```"},{"label":"Custom","content":"```ruby\nclass AssertFileNotEmpty\n  include CustomService::Config\n\n  option :path\n\n  validates :path, presence: true\n\n  def result\n    return failure(\"File is empty at path `#{path}`\") if File.zero?(path)\n\n    success\n  end\nend\n```"}]}'></cs-react-island>

Organizer service example (has steps).

<cs-react-island component="Tabs" props='{"tabs":[{"label":"Standard","content":"```ruby\nclass ReadFileContent\n  include ApplicationService::Config\n\n  attr_reader :path\n\n  step :validate_path\n  step AssertFileExists, in: :path\n  step AssertFileNotEmpty, in: :path\n  step :result, in: :path, out: :content\n\n  def initialize(path:)\n    @path = path\n  end\n\n  def result\n    success(content: File.read(path))\n  end\n\n  private\n\n  def validate_path\n    return error(\"Path is `nil`\") if path.nil?\n    return error(\"Path is empty\") if path.empty?\n\n    success\n  end\nend\n```"},{"label":"Rails","content":"```ruby\nclass ReadFileContent\n  include RailsService::Config\n\n  attribute :path, :string\n\n  validates :path, presence: true\n\n  step AssertFileExists, in: :path\n  step AssertFileNotEmpty, in: :path\n  step :result, in: :path, out: :content\n\n  def result\n    success(content: File.read(path))\n  end\nend\n```"},{"label":"Dry","content":"```ruby\nclass ReadFileContent\n  include DryService::Config\n\n  option :path\n\n  contract do\n    schema do\n      required(:path).value(:string)\n    end\n  end\n\n  step AssertFileExists, in: :path\n  step AssertFileNotEmpty, in: :path\n  step :result, in: :path, out: :content\n\n  def result\n    success(content: File.read(path))\n  end\nend\n```"},{"label":"Custom","content":"```ruby\nclass ReadFileContent\n  include CustomService::Config\n\n  option :path\n\n  validates :path, presence: true\n\n  step AssertFileExists, in: :path\n  step AssertFileNotEmpty, in: :path\n  step :result, in: :path, out: :content\n\n  def result\n    success(content: File.read(path))\n  end\nend\n```"}]}'></cs-react-island>

```ruby
result = ReadFileContent.result(path: "Gemfile")
```

See more [examples](https://github.com/marian13/convenient_service/tree/main/lib/convenient_service/examples) with [specs](https://github.com/marian13/convenient_service/tree/main/spec/lib/convenient_service/examples) in the Convenient Service [repo](https://github.com/marian13/convenient_service).
