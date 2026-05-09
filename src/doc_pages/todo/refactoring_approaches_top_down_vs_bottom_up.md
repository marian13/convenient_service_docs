# Refactoring Approaches: Top-Down vs Bottom-Up

TODO: Compare the two approaches when extracting methods into Convenient Service services.

## Bottom-Up

Start with leaf-level methods (no internal service dependencies), convert those first, then compose them into larger services.

Pros:
- Each service is independently testable from the start
- No stubs or placeholders needed — dependencies are real services when the parent is created
- Composition feels natural using `step` DSL

Cons:
- You need to plan the full dependency tree upfront
- Takes longer to see the top-level service working

## Top-Down

Start with the high-level service, keep internals as plain methods or stubs, migrate them later.

Pros:
- Faster to get the top-level shape right
- Useful when the boundaries are unclear and need to emerge

Cons:
- The high-level service is incomplete until all internals are migrated
- Harder to test until the full tree is done

## Decision

We use **bottom-up** for this project.
