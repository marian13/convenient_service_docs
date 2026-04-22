require 'sinatra'

ROOT = File.expand_path('..', __dir__)

set :port, ENV.fetch('PORT', 8100).to_i
set :views, File.join(ROOT, 'views')

disable :static

get %r{/(src|public)/(.*)} do |dir, path|
  send_file File.join(ROOT, dir, path)
rescue Errno::ENOENT
  halt 404
end

get '/' do
  @title = 'Convenient Service'
  erb File.read(File.join(ROOT, 'pages/index.html'))
end

get %r{/(docs|pages|src)/(.+\.html)} do |dir, path|
  md_file = File.join(ROOT, dir, path.sub(/\.html$/, '.md'))

  if File.exist?(md_file)
    @title = File.basename(md_file, '.md')
    @md_path = "/#{dir}/#{path.sub(/\.html$/, '.md')}"
    erb :doc
  else
    html_file = File.join(ROOT, dir, path)
    halt 404 unless File.exist?(html_file)
    send_file html_file
  end
end

not_found do
  send_file File.join(ROOT, 'public/404.html')
end

get %r{/(docs|pages|src)/(.+\.md)} do |dir, path|
  file = File.join(ROOT, dir, path)
  halt 404 unless File.exist?(file)
  content_type 'text/markdown'
  send_file file
end
