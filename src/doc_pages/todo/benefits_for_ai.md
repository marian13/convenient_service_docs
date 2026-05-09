# Benefits of Convenient Service for AI

TODO: Document how the Convenient Service structure benefits AI assistants working with the codebase.

Key points to cover:

- Well-named services are self-documenting — AI can reason about the pipeline without reading every file
- `in:`/`out:` declarations make data flow explicit — no need to trace mutable state through imperative code
- Single-responsibility services mean AI only needs to open the specific file where something is wrong
- Step pipelines are cheaper to read than flat methods that mix concerns — paradoxically more token-efficient despite more files
- Contrast: one big `result` method requires reading everything to understand anything; a step pipeline with good names requires reading almost nothing to understand the shape
