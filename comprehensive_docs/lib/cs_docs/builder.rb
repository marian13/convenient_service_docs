# frozen_string_literal: true

require "nokogiri"
require "concurrent"
require "ferrum"
require "fileutils"
require "logger"
require "net/http"
require "retriable"
require "rexml/document"
require "socket"
require "uri"
require "yaml"

require_relative "validators"
require_relative "services"
require_relative "builder/services"

result = CSDocs::Builder::Services::Build.result

if result.success?
  exit(0)
else
  $stderr.puts result.message

  exit(1)
end
