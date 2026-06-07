---
slug: /faq/why_error_not_exception
sidebar_position: 1
title: Why errors? Why not exceptions?
---

## Unhandled exceptions are crashing important flows for minor reasons too often

Imagine we have a travel app.

A typical apartment booking flow may look like the following.

- User opens the application.

- User selects location, dates, guest number, etc.

- User books an apartment.

- Host accepts the booking.

- User pays for the apartment.

- And so on...

After a while, a new requirement is received to display a small discount proposals widget for the apartments that are located in the not popular regions.

Business truly and argumentably believes that such a feature will increase the [conversion rate](https://en.wikipedia.org/wiki/Conversion_rate_optimization).

The region popularity detection algorithm is developed by a different team, which swears that it works as expected, but the unit tests are not finished due to other commitments.

With constant pressure from the higher management, an inexperienced developer agrees to add the widget with the subsequent release.

Once the new app version is deployed, apartment selection starts to crash, preventing the users from completing bookings.

The rest is history.

Massive panic.

Endless late-night meetings and discussions.

DevOps engineers who know how to roll back the change are on vacation.

End-users are posting negative feedback on their social media, etc.

Instead of increasing the [conversion rate](https://en.wikipedia.org/wiki/Conversion_rate_optimization), it is now significantly degraded.

The moral of the story is that the new feature was added in a non [fault-tolerant](https://en.wikipedia.org/wiki/Fault_tolerance) way.

Sure, the discount widget is a useful functionality when properly implemented.

But, it is just a tiny component in the context of the full apartment booking flow.

Thus not having a feature-specific exception handler for it is an unjustified risk.

That is why [Convenient Service](/) promotes the idea of using [error results](/basics/errors) instead of regular exceptions.

They help to develop [fault-tolerant](https://en.wikipedia.org/wiki/Fault_tolerance) systems right from the beginning.

Let's tackle a more ground-facing example, that every Ruby developer experiences from time to time.

Data and time formatting 🥲.

A minimal code snippet to illustrate the issue is the following:

```ruby
require "date"

def format_date(string)
  Date.strptime(string, "%Y-%m-%d")
end
```

Once the user's browser localization format changes, the `format_date` method breaks the whole page by raising `invalid date (Date::Error)` exceptions.

```ruby
format_date("2024/07/16")
# =>
#   `strptime': invalid date (Date::Error)
#
#   Date.strptime(string, "%Y-%m-%d")
#                 ^^^^^^^^^^^^^^^^^^
```

At the same time, a corresponding service encloses unhandled exceptions by converting them into error results.

```ruby
require "convenient_service"

ConvenientService::Dependencies.require_rescues_result_unhandled_exceptions

class FormatDate
  include ConvenientService::Standard::Config

  attr_reader :string

 middlewares :result do
 use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware
  end

  def initialize(string:)
    @string = string
  end

  def result
 formatted_date = Date.strptime(string, "%Y-%m-%d")

    success(formatted_date: formatted_date)
  end
end
```

Technically speaking, it creates so-called [exception boundaries](https://devblogs.microsoft.com/cppblog/exception-boundaries).

```ruby
result = FormatDate.result(string: "2024/07/16")
# =>
#   <FormatDate::Result status: :error data_keys: [:exception] message: "Date::Error:
#   ...
#
```

As a consequence, only a single service has an unpredicted mistake, but since its negative effect is isolated, the rest of the system stays functional.

Due to the fact that unhandled exceptions can not leak outside error results boundaries, the code becomes [fault-tolerant](https://en.wikipedia.org/wiki/Fault_tolerance) by default.

:::info

Currently, the `RescuesResultUnhandledExceptions` plugin is not included in the `Standard` configuration.

End-users have the ability to decide by themselves whether to add it or not.

For example, the best practice says to use it for development and production environments.

This way you can learn how the plugin works during development and have a calm and healthy sleep when the code is released.

But for the testing environment, it is still beneficial to not auto rescue exceptions to find them faster.

:::

:::caution

This article demonstrates the concept that there is a possibility of an automated fallback for exceptions.

However, developers still need to reasonably predict the edge cases and describe them explicitly in order to have more explanatory error messages.

So, the properly finished `FormatDate` service is written below.

```ruby
class FormatDate
  include ConvenientService::Standard::Config

  attr_reader :string

 middlewares :result do
 use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware
  end

  def initialize(string:)
    @string = string
  end

  def result
    success(date_time: ::DateTime.strptime(string, format))
  rescue ::Date::Error
    error("String `#{string}` does NOT follow date time `#{format}`")
  end
end
```

:::
