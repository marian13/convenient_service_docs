# How to delay service result calculation?

<cs-react-island component="DocAxes" props='{"label":"Usage / Basic / How-to / Task"}'></cs-react-island>

<cs-dita-short-description>

How to create a service and run its result calculation at a later point.

</cs-dita-short-description>

<cs-dita-task-prerequisites>

## Prerequisites

- A service class is defined and includes a config.

</cs-dita-task-prerequisites>

<cs-dita-task-steps>

## Steps

1. Create the service with `ServiceName.new(...)` - this does not trigger the result calculation.
2. Call `#result` when the calculation is needed.

</cs-dita-task-steps>

<cs-dita-task-result>

## Result

The service calculation is deferred until `#result` is called. The instance can be passed around or stored in a variable before the result is ever computed.

</cs-dita-task-result>

<cs-dita-example>

## Example

```ruby
service = AssertFileExists.new(path: "Gemfile") ## step 1 - no calculation yet

## ... other work ...

result = service.result ## step 2 - calculation happens here
```

</cs-dita-example>
