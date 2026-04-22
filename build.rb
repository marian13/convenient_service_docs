require 'ferrum'
require 'rexml/document'
require 'fileutils'
require 'uri'

PORT = 3000

server_pid = spawn('bundle exec ruby server.rb')
sleep 2

browser = Ferrum::Browser.new

doc = REXML::Document.new(File.read('sitemap.xml'))
locs = doc.elements.collect('urlset/url/loc', &:text)

locs.each do |loc|
  path = URI.parse(loc).path
  local_url = "http://localhost:#{PORT}#{path}"

  browser.goto(local_url)
  browser.network.wait_for_idle
  html = browser.evaluate('document.documentElement.outerHTML')

  out = if path == '/'
    'dist/index.html'
  elsif path.end_with?('.md')
    "dist#{path.sub(/\.md$/, '.html')}"
  else
    "dist#{path.chomp('/')}/index.html"
  end

  FileUtils.mkdir_p(File.dirname(out))
  File.write(out, "<!DOCTYPE html>\n#{html}")
  puts "built #{out}"
end

FileUtils.cp_r('src', 'dist/src', remove_destination: true)

browser.quit
Process.kill('TERM', server_pid)
Process.wait(server_pid)
puts 'done'
