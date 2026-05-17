---
title: Caching Steps
---

# Caching Steps

TODO: Document how to avoid redundant service calls when the same computation is needed by multiple steps.

Current example: `SaveAsset` calls `ResolveDistPath` logic twice — once directly via `ResolveDistPath` step, and once internally inside `ResolveDistFolderPath`.

Cover:
- Whether Convenient Service has built-in step result caching
- How to structure steps to avoid redundant calls (e.g. passing already-resolved values downstream)
- Tradeoffs: clarity vs. efficiency
