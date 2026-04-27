# frozen_string_literal: true

require 'sinatra/base'

class DevServer < Sinatra::Base
  set :port, ENV.fetch('PORT', 8100).to_i
  set :views, File.join(File.expand_path('..', __dir__), 'src/views')

  disable :static

  helpers do
    def root
      @root ||= File.expand_path('..', __dir__)
    end

    def url_path
      request.path_info
    end

    def render_partial(name, locals: {})
      erb :"partials/#{name}/index.html", layout: false, locals: locals
    end

    def send_static_file(url_path)
      send_file static_file_path_from(url_path)
    end

    def send_dynamic_html_page(url_path)
      @content = read_erb_file(dynamic_file_path_from(url_path))

      erb :"html_page.html", layout: :"layouts/html_layout.html"
    end

    def send_dynamic_html_doc(url_path)
      @path = url_path_from(dynamic_file_path_from(url_path.delete_suffix(".html") + ".md"))

      erb :"html_doc.html", layout: :"layouts/html_layout.html"
    end

    def send_dynamic_markdown_doc(url_path)
      content_type 'text/markdown'

      @content = read_erb_file(dynamic_file_path_from(url_path))

      erb :"markdown_doc.md", layout: :"layouts/markdown_layout.md"
    end

    def file_exist?(file_path)
      File.exist?(file_path)
    end

    def read_file(file_path)
      File.read(file_path)
    end

    def read_erb_file(file_path)
      erb(read_file(file_path), layout: false)
    end

    def static_file_path_from(url_path)
      File.join(root, 'src', url_path)
    end

    def dynamic_file_path_from(url_path)
      file_path = static_file_path_from(url_path)

      return file_path if file_exist?(file_path)

      erb_file_path = file_path + ".erb"

      return erb_file_path if file_exist?(erb_file_path)

      extension = File.extname(file_path)

      index_file_path = file_path.delete_suffix(extension) + "/index" + extension

      return index_file_path if file_exist?(index_file_path)

      index_erb_file_path = index_file_path + ".erb"

      return index_erb_file_path if file_exist?(index_erb_file_path)
    end

    def url_path_from(file_path)
      file_path.delete_prefix(File.join(root, 'src'))
    end
  end

  get %r{/pages/(.+\.html)} do
    send_dynamic_html_page url_path
  end

  get %r{/docs/(.+\.html)} do
    send_dynamic_html_doc url_path
  end

  get %r{/docs/(.+\.md)} do
    send_dynamic_markdown_doc url_path
  end

  get %r{/(components|global|pages|utils|public)/(.+\.(js|css|svg|png|ico))} do
    send_static_file url_path
  end

  get %r{/views/partials/(.+\.css)} do
    send_static_file url_path
  end

  get '/healthcheck' do
    'ok'
  end

  get '/' do
    send_dynamic_html_page '/pages/home/index.html'
  end

  not_found do
    send_static_file '/public/404.html'
  end
end

DevServer.run! if app_file == $0
