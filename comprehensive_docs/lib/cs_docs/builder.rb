# frozen_string_literal: true

$LOAD_PATH.unshift(File.expand_path('..', __dir__))

require 'cs_docs/builder/services/build'

result = CSDocs::Builder::Services::Build.result

if result.success?
  exit(0)
else
  $stderr.puts result.message

  exit(1)
end
