
## How to load RSpec extensions?

- RSpec extensions extra loads RSpec matchers (`be_success`, `be_failure`, `be_error`) and helpers (`stub_service`) for testing Convenient Service services.

- In order to load it, require `convenient_service` and the extra from `spec_helper.rb`.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/rspec"
  ```

- Once loaded, matchers and helpers are available in spec files.

  ```ruby
  # In some spec file like `service_spec.rb`
  RSpec.describe Service do
    include ConvenientService::RSpec::Matchers::Results

    it "returns success" do
      expect(Service.result).to be_success
    end
  end
  ```

  ```ruby
  # In some spec file like `other_service_spec.rb`
  RSpec.describe OtherService do
    include ConvenientService::RSpec::Helpers::StubService

    before do
      stub_service(Service).to return_success.with_data(foo: :bar)
    end

    # ...
  end
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
