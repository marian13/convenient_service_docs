# frozen_string_literal: true

require 'ferrum'
require 'rexml/document'
require 'fileutils'
require 'socket'
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

def html_urls
  @html_urls ||= locs
    .reject { |loc| URI.parse(loc).path.end_with?('.md') }
    .map { |loc| URI.parse("http://localhost:#{port}#{URI.parse(loc).path}") }
end

def build_url(url)
  browser = Ferrum::Browser.new(timeout: 15, headless: true)
  browser.page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__build__ = true")
  browser.goto(url.to_s)
  browser.network.wait_for_idle
  sleep 5
  content = "<!DOCTYPE html>\n#{browser.evaluate('document.documentElement.outerHTML')}"
  browser.quit

  out = if url.path == '/'
    File.join(root, 'dist/index.html')
  elsif url.path.end_with?('.html')
    File.join(root, 'dist', url.path)
  else
    File.join(root, 'dist', url.path.chomp('/'), 'index.html')
  end

  FileUtils.mkdir_p(File.dirname(out))
  File.write(out, content)
  puts "built #{out.delete_prefix("#{root}/")}"
end

FileUtils.rm_rf(File.join(root, 'dist'))

server_pid = spawn("PORT=#{port} bundle exec ruby lib/dev_server.rb", chdir: root)

sleep 2

html_urls.map { |url| Thread.new { build_url(url) } }.each(&:join)

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
