
## How to load awesome_print_inspect standard config option?

- Enables colored `inspect` output for services and results via [`awesome_print`](https://github.com/awesome-print/awesome_print).

- Require `convenient_service` and the extra.

  ```ruby
  require "convenient_service"
  require "convenient_service/extras/standard/config/options/awesome_print_inspect"
  ```

- Services can now use `.with(:awesome_print_inspect)` and `ap` prints colored output.

  ```ruby
  class Service
    include ConvenientService::Standard::Config.with(:awesome_print_inspect)

    def result
      success
    end
  end

  ap Service.result
  # {
  #     :ConvenientService => {
  #          :entity => "Result",
  #         :service => "Service",
  #          :status => :success
  # }
  ```

### See also

- [What is Convenient Service extra?](/docs/the_what/what_is_convenient_service_extra.html)
