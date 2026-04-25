# frozen_string_literal: true

require 'sinatra'

def root
  @root ||= File.expand_path('..', __dir__)
end

def port
  @port ||= ENV.fetch('PORT', 8100).to_i
end

set :port, port
set :views, File.join(root, 'src/views')
set :erb, layout: :"layout.html"

disable :static

helpers do
  def path
    request.path_info
  end

  def src_file(url_path)
    File.join(root, 'src', url_path.sub(%r{^/src}, ''))
  end

  def send_static_file(url_path)
    send_file src_file(url_path)
  end

  def send_dynamic_page(url_path)
    @content = File.read(src_file(url_path))

    erb :"page.html"
  end

  def send_dynamic_doc(url_path)
    @path = url_path

    erb :"doc.html"
  end

  def render_partial(name)
    erb :"partials/#{name}/index.html", layout: false
  end
end

get '/healthcheck' do
  'ok'
end

get %r{/(src|public)/(.+\.(js|css|svg|png))} do
  send_static_file path
end

get %r{/views/partials/(.+\.css)} do
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
