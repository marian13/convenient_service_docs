# AI Refactoring Feedback

Honest impressions from refactoring `builder.rb` into Convenient Service services.

---

## What was easy

**Step DSL readability.** `step ServiceName, in: ..., out: ...` maps directly to intent. No ambiguity about what flows where. Easy to write, easy to verify.

**Memoized private methods as step inputs.** Once shown the pattern, it felt natural. A memoized `def sitemap_path` in `in: {path: :sitemap_path}` is cleaner than a resolver step for simple computed values.

**`step :result` naming convention.** Immediately intuitive once explained. The last step being named `:result` signals "this is the core logic" without any additional documentation.

**`after :result` callbacks.** Clean separation of side effects (logging) from logic. Easy to apply consistently.

**Options with defaults.** `option :pool, default: proc { Concurrent::FixedThreadPool.new(8) }` is expressive and keeps services self-contained while remaining injectable.

**`or_step` composing leaf services.** Once `ResolveLocsFromArgv` and `ResolveLocsFromSitemap` existed, writing `ResolveLocs` with `or_step` took seconds. The result was the clearest service in the whole codebase.

---

## What was hard

**Service goals and `failure` semantics.** This was the biggest conceptual hurdle. The instinct is: failure = something went wrong. In CS, failure = "goal not achieved — and that is a valid, expected answer." `CollectAsset` returning `failure` for exchanges that are not assets felt wrong at first. Understanding that callers can `with_fallback` reframed it, but this needed explicit explanation. It is not discoverable from the DSL alone.

The word "failure" itself carries too much baggage. Two analogies that break the assumption before any code is shown:

- **Predicate analogy** — a service is like a method returning `true` or `false`. Nobody says a method "failed" when it returns false. `success` = true, `failure` = false.
- **HTTP analogy** — `success` is 200, `failure` is 404, `error` is 500. A 404 is not a crash, it is an answer. This maps directly to `or_step` (try another route) and `with_fallback` (treat 404 as 200).

Recommendation: keep `failure` in the API — it is short and consistent — but lead the docs with both analogies before showing any code. The word is fine once the mental model is right.

**`with_fallback` definition requirement.** That `fallback_result` must be defined on the service itself (not inherited) is a non-obvious constraint. Easy to get wrong silently.

**Knowing when to use a step vs a memoized private method.** The heuristic — service calls become steps, simple computed values become memoized methods — makes sense in hindsight but is not obvious upfront. `sitemap_path` could reasonably have been a resolver step.

**Service decomposition granularity.** How fine-grained is too fine? `ConvertLocsToUris` as its own service vs inlining in `Build` as a memoized method. The three-service split for `ResolveLocs` / `ResolveLocsFromArgv` / `ResolveLocsFromSitemap` was user-driven — the instinct would have been one service with a conditional.

**`step` doing double duty.** `step Services::SomeName` and `step :result` use the same keyword but one calls a service class, the other calls a private method. Easy once shown, but the overloading is a potential first-contact confusion.

**`with_fallback` vs `or_step`.** Both handle failure, but in different shapes — one at the call site, one in the step chain. Knowing which to reach for required explicit guidance.

**Service naming judgment calls.** The verb-first rule is clear, but `ResolveLocs` vs `ParseLocs` vs `ReadLocs` still requires taste. The rule does not eliminate the decision.

---

*Note for lib author: most of the above are not fixable at the library level. Decomposition granularity, naming taste, and step vs memoized method are judgment calls that belong in documentation and examples — not in the API. The only potentially actionable one is `step` overloading, and even there the trade-off (concise DSL vs explicitness) likely favors keeping it as is.*

**`in:` rename syntax.** Initial confusion, but the correct mental model is: `in: {path: :sitemap_path}` is identical to calling `Services::ReadFileContent.call(path: sitemap_path)` — the key is the parameter name, the value is what is passed for it. Exactly like a Ruby keyword argument. Once this clicked, it was natural.

**Double computation in composed services.** `SaveAsset` calling both `ConvertUriToDistPath` and `ConvertUriToDistParentPath` computes `dist_path` twice internally. Not obvious from the step declarations. Requires knowing the internals of each sub-service.

**`result` vs `call` distinction.** The difference is meaningful (one raises, one returns) but easy to forget under habit. Worth a prominent doc.

---

## What surprised me

`builder.rb` going from ~100 lines to 9 lines without losing anything. The complexity moved — it did not disappear — but it moved into places where it is named, isolated, and easier to reason about independently.

The framework does real work. It is not just organizing code differently.

---

## Suggestions for documentation

- Lead with service goals and `failure` semantics early — this is the key mental shift
- Show `or_step` before `with_fallback` — it demonstrates failure-as-signal more cleanly
- Document `in:` rename direction explicitly with a before/after example
- Add a note about double computation in composed services and when caching steps matter
