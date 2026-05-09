# Method Step Naming Convention

TODO: Write article.

## The problem

When a service has both private method steps and regular private helper methods, there is no visual distinction between them at the definition site.

```ruby
step :process_uris   # is this a step or a helper?

private

def process_uris     # looks like any other private method
  ...
end

def sequential?      # also a private method, but a helper
  ENV["SEQUENTIAL"] == "1"
end
```

## Option A: PascalCase for method steps (current choice)

```ruby
step :ProcessUris

private

def ProcessUris      # clearly a step — stands out from helpers
  ...
end

def sequential?      # clearly a helper
  ENV["SEQUENTIAL"] == "1"
end
```

**Pro:** Immediately visible distinction at both the `step` declaration and the method definition.
**Con:** Breaks Ruby snake_case convention for method names. RuboCop will flag it. Unfamiliar to readers without context.

## Option B: Naming prefix/suffix

```ruby
step :step_process_uris

private

def step_process_uris
  ...
end
```

**Pro:** Stays snake_case, still signals intent.
**Con:** Verbose. The prefix is redundant given the `step` declaration above.

## Option C: No convention — rely on `step` declaration

The `step :process_uris` declaration at the top of the class already signals it is a step. The method definition is just an implementation detail.

**Pro:** No convention to learn or enforce.
**Con:** In a long service with many private methods, the connection between declaration and definition is not obvious.

## Discussion needed

- Is PascalCase worth the RuboCop friction?
- Should CS provide a linter rule to enforce whichever convention is chosen?
- Does the step declaration at the top make the definition-site convention unnecessary?
