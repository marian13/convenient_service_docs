require 'ferrum'
require 'net/http'
require 'rexml/document'
require 'fileutils'
require 'socket'
require 'uri'

ROOT = File.expand_path('..', __dir__)

FileUtils.rm_rf(File.join(ROOT, 'dist'))

def free_port
  server = TCPServer.new('127.0.0.1', 0)
  port = server.addr[1]
  server.close
  port
end

PORT = free_port

server_pid = spawn("PORT=#{PORT} bundle exec ruby scripts/server.rb", chdir: ROOT)
sleep 2

doc = REXML::Document.new(File.read(File.join(ROOT, 'sitemap.xml')))
locs = doc.elements.collect('urlset/url/loc', &:text)

threads = locs.map do |loc|
  Thread.new do
    path = URI.parse(loc).path
    local_url = "http://localhost:#{PORT}#{path}"

    if path.end_with?('.md')
      content = Net::HTTP.get(URI(local_url))
      out = File.join(ROOT, 'dist', path)
    else
      browser = Ferrum::Browser.new(timeout: 15, headless: true)
      browser.page.command("Page.addScriptToEvaluateOnNewDocument", source: "window.__build__ = true")
      browser.goto(local_url)
      browser.network.wait_for_idle
      sleep 5
      content = "<!DOCTYPE html>\n#{browser.evaluate('document.documentElement.outerHTML')}"
      browser.quit
      out = if path == '/'
        File.join(ROOT, 'dist/index.html')
      elsif path.end_with?('.html')
        File.join(ROOT, 'dist', path)
      else
        File.join(ROOT, 'dist', path.chomp('/'), 'index.html')
      end
    end

    FileUtils.mkdir_p(File.dirname(out))
    File.write(out, content)
    puts "built #{out.delete_prefix("#{ROOT}/")}"
  end
end

threads.each(&:join)

FileUtils.cp_r(File.join(ROOT, 'src'),    File.join(ROOT, 'dist/src'),    remove_destination: true)
FileUtils.cp_r(File.join(ROOT, 'pages'),  File.join(ROOT, 'dist/pages'),  remove_destination: true)
FileUtils.cp_r(File.join(ROOT, 'public'), File.join(ROOT, 'dist/public'), remove_destination: true)
FileUtils.cp(  File.join(ROOT, 'sitemap.xml'), File.join(ROOT, 'dist/sitemap.xml'))

Process.kill('TERM', server_pid)
Process.wait(server_pid)
puts 'done'
