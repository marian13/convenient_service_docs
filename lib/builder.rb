# frozen_string_literal: true

require_relative 'services/build'

result = Services::Build.result

if result.success?
  exit(0)
else
  $stderr.puts result.message

  exit(1)
end
