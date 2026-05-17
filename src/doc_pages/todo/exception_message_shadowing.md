---
title: Exception Message Shadowing
---

# Exception Message Shadowing

TODO: Discuss how wrapping exceptions in `error` results can shadow the original message and lose the backtrace.

Example: `error("Network unavailable — CDN assets will not load: #{e.message}")` embeds only the message string, discarding the exception class and full backtrace.

Cover:
- When to preserve the original exception vs. wrap it in a friendlier message
- How `fault_tolerance: true` catches and converts exceptions automatically
- What information is lost and how to surface it (e.g. logging before returning `error`)
