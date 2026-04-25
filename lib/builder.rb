# frozen_string_literal: true

require 'ferrum'
require 'retriable'
require 'rexml/document'
require 'fileutils'
require 'socket'
require 'net/http'
require 'uri'

def root
  @root ||= File.expand_path('..', __dir__)
end

def port
  @port ||= begin
    server = TCPServer.new('127.0.0.1', 0)

    port = server.addr[1]

    server.close

    port
  end
end

def locs
  @locs ||= if ARGV.any?
    ARGV
  else
    doc = REXML::Document.new(File.read(File.join(root, 'sitemap.xml')))

    doc.elements.collect('urlset/url/loc', &:text)
  end
end

def urls
  @urls ||= locs.map do |loc|
    uri = URI.parse(loc)
    uri.scheme = 'http'
    uri.host = 'localhost'
    uri.port = port
    uri
  end
end

def dynamic_urls
  @dynamic_urls ||= urls.reject { |url| url.path.end_with?('.md') }
end

def wait(tries: 20, &block)
  Retriable.retriable(tries: tries, base_interval: 0.1) { raise unless block.call }
end

def resolve_dist_path(url)
  if url.path == '/'
    File.join(root, 'dist/index.html')
  elsif url.path.end_with?('.html')
    File.join(root, 'dist', url.path)
  else
    File.join(root, 'dist', url.path.chomp('/'), 'index.html')
  end
end

def build_url(url)
  browser = Ferrum::Browser.new(timeout: 15, headless: true)

  browser.page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__build__ = true")
  browser.goto(url.to_s)
  browser.network.wait_for_idle

  wait(tries: 50) { browser.evaluate("window.__ready__") }

  content = "<!DOCTYPE html>\n#{browser.evaluate('document.documentElement.outerHTML')}"

  browser.quit

  dist_path = resolve_dist_path(url)

  FileUtils.mkdir_p(File.dirname(dist_path))
  File.write(dist_path, content)

  puts "built #{dist_path.delete_prefix("#{root}/")}"
end

FileUtils.rm_rf(File.join(root, 'dist'))

server_pid = spawn("PORT=#{port} bundle exec ruby lib/dev_server.rb", chdir: root)

wait { Net::HTTP.get(URI("http://localhost:#{port}/healthcheck")) }

dynamic_urls.map { |url| Thread.new { build_url(url) } }.each(&:join)

FileUtils.cp_r(File.join(root, 'src/docs'), File.join(root, 'dist/docs'), remove_destination: true)
FileUtils.mkdir_p(File.join(root, 'dist/src'))
FileUtils.cp_r(File.join(root, 'src/components'), File.join(root, 'dist/src/components'), remove_destination: true)
FileUtils.cp_r(File.join(root, 'src/global'), File.join(root, 'dist/src/global'), remove_destination: true)
FileUtils.cp_r(File.join(root, 'src/utils'), File.join(root, 'dist/src/utils'), remove_destination: true)
FileUtils.cp_r(File.join(root, 'src/public'), File.join(root, 'dist/public'), remove_destination: true)
FileUtils.mkdir_p(File.join(root, 'dist/views'))
FileUtils.cp_r(File.join(root, 'src/views/partials'), File.join(root, 'dist/views/partials'), remove_destination: true)
FileUtils.cp(File.join(root, 'sitemap.xml'), File.join(root, 'dist/sitemap.xml'))

Process.kill('TERM', server_pid)
Process.wait(server_pid)

puts 'done'
