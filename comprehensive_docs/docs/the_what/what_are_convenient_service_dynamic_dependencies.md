
## What are Convenient Service dynamic dependencies?

- Dynamic dependencies are loaded on demand.

- [`dry-initializer`](https://github.com/dry-rb/dry-initializer), [`dry-validation`](https://github.com/dry-rb/dry-validation), [`active_model`](https://github.com/rails/rails/tree/main/activemodel), [`active_record`](https://github.com/rails/rails/tree/main/activerecord), [`memo_wise`](https://github.com/panorama-ed/memo_wise), [`awesome_print`](https://github.com/awesome-print/awesome_print), [`amazing_print`](https://github.com/amazing-print/amazing_print) are examples of dynamic dependencies.

- They serve as backends for optional plugins - each dynamic dependency powers a specific category such as validation, memoization, constructor assignment, pretty printing, and more.

- It is a decision left to the end-user whether to require them or not - they can load them manually, or via dependencies queries or extras.

### See also

- [What are Convenient Service static dependencies?](/docs/the_what/what_are_convenient_service_static_dependencies.html)

- [How to load dynamic dependencies?](/docs/the_how/how_to_load_dynamic_dependencies.html)
