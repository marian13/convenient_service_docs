
## How to get Convenient Service root folder?

- Call `ConvenientService.root` to get the gem's installation directory as a [`Pathname`](https://ruby-doc.org/stdlib-2.7.0/libdoc/pathname/rdoc/Pathname.html).

  ```ruby
  ConvenientService.root
  # => #<Pathname:/path/to/gems/convenient_service-1.0.0>
  ```

- Since the returned value is a [`Pathname`](https://ruby-doc.org/stdlib-2.7.0/libdoc/pathname/rdoc/Pathname.html), all standard path operations are available.

  ```ruby
  ConvenientService.root.join("lib", "convenient_service.rb")
  # => #<Pathname:/path/to/gems/convenient_service-1.0.0/lib/convenient_service.rb>

  ConvenientService.root.join("lib", "convenient_service.rb").exist?
  # => true
  ```

- `ConvenientService.root` is inspired by [`Rails.root`](https://api.rubyonrails.org/classes/Rails.html#method-c-root).

### Sources

- [lib/convenient_service.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/lib/convenient_service.rb)
- [spec/lib/convenient_service_spec.rb](https://github.com/marian13/convenient_service/blob/v0.24.0/spec/lib/convenient_service_spec.rb)
