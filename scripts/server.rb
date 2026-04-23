require 'sinatra'

ROOT = File.expand_path('..', __dir__)

set :port, ENV.fetch('PORT', 8100).to_i
set :views, File.join(ROOT, 'views')

disable :static

helpers do
  def path
    request.path_info
  end

  def send_static_file(path)
    send_file File.join(ROOT, path)
  end

  def send_dynamic_page(path)
    @content = File.read(File.join(ROOT, path))

    erb :page
  end

  def send_dynamic_doc(path)
    @path = path

    erb :doc
  end
end

get %r{/(src|public)/(.+\.(js|css|svg|png))} do
  send_static_file path
end

get '/' do
  send_dynamic_page '/pages/index.html'
end

get %r{/docs/(.+\.md)} do
  content_type 'text/markdown'

  send_static_file path
end

get %r{/docs/(.+\.html)} do
  send_dynamic_doc path.sub(/\.html$/, '.md')
end

get %r{/pages/(.+\.html)} do
  send_dynamic_page path
end

not_found do
  send_static_file '/public/404.html'
end
