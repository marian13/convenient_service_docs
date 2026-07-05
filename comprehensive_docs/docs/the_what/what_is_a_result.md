
## What is a result?

- A result is the [JSend](https://github.com/omniti-labs/jsend)-style data structure every Convenient Service service returns. It provides a unified way to check the outcome of an operation and access its data, message, and code.

  ```ruby
  class FindUser
    include ConvenientService::Standard::Config

    attr_reader :id

    def initialize(id:)
      @id = id
    end

    def result
      return error("Id is `nil`") if id.nil?

      users = {1 => {name: "John"}}

      return failure("User with id `#{id}` does not exist") unless users.key?(id)

      success(user: users[id])
    end
  end

  result = FindUser.result(id: 1)

  result.class
  # => FindUser::Result

  result.status.to_sym
  # => :success
  ```

- Status checks: `success?`, `failure?`, `error?`, `not_success?`, `not_failure?`, `not_error?`.

- Attributes: `status`, `data`, `message`, `code`, `service` (the service instance that produced the result), `original_service` (for results returned via steps, the step's own service - not the organizer).

  ```ruby
  result.success?
  # => true

  result.data[:user]
  # => {name: "John"}
  ```

- Data keys are also accessible as methods: `result.data.user` is equivalent to `result.data[:user]`.

  ```ruby
  result.data.user
  # => {name: "John"}
  ```

- Accessing `data`, `message`, or `code` before checking the result's status raises an error.

  ```ruby
  result = FindUser.result(id: 1)

  result.data
  # raises ConvenientService::Service::Plugins::HasJSendResult::Entities::Result::Plugins::RaisesOnNotCheckedResultStatus::Exceptions::StatusIsNotChecked
  ```

- `ud`, `um`, and `uc` are debugger-friendly shortcuts for `unsafe_data`, `unsafe_message`, and `unsafe_code` - they skip the status check, which is convenient when inspecting a result in a debugger session.

  ```ruby
  result.ud
  # => <FindUser::Result::Data user: {name: "John"}>
  ```

### See also

- [What is a service?](/docs/the_what/what_is_a_service.html)
- [What is a regular service?](/docs/the_what/what_is_a_regular_service.html)
- [What is an organizer service?](/docs/the_what/what_is_an_organizer_service.html)

### Sources

- [lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/concern/instance_methods.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/has_j_send_status_and_attributes/concern/instance_methods.rb)
- [lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_step/concern.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_step/concern.rb)
- [lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_checked_status/concern.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service/service/plugins/has_j_send_result/entities/result/plugins/can_have_checked_status/concern.rb)
