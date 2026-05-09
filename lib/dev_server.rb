# frozen_string_literal: true

require 'sinatra/base'
require 'fileutils'
require 'rack'

class ResponseCache
  attr_reader :app, :cache_dir

  def initialize(app, cache_dir:)
    @app = app
    @cache_dir = cache_dir
  end

  def call(env)
    cache_path = cache_path_from(Rack::Request.new(env).path_info)

    return hit(cache_path) if File.exist?(cache_path)

    miss(env, cache_path)
  end

  private

  def hit(cache_path)
    body = File.binread(cache_path)

    content_type = Rack::Mime.mime_type(File.extname(cache_path))

    [200, { 'Content-Type' => content_type }, [body]]
  end

  def miss(env, cache_path)
    status, headers, body = app.call(env)

    store(cache_path, body) if status == 200

    [status, headers, body]
  end

  def store(cache_path, body)
    FileUtils.mkdir_p(File.dirname(cache_path))

    content = body.each.map(&:to_s).join

    File.binwrite(cache_path, content)
  end

  def cache_path_from(path)
    normalized = path == '/' ? '/index.html' : path

    File.join(cache_dir, normalized)
  end
end

class DevServer < Sinatra::Base
  class << self
    def port
      @port ||= ENV.fetch('PORT', 8100).to_i
    end

    def root
      @root ||= File.expand_path('..', __dir__)
    end

    def run!(...)
      FileUtils.rm_rf(File.join(root, 'tmp/cache/responses'))

      super(...)
    end
  end

  set :port, port
  set :views, File.join(root, 'src/views')

  # use ResponseCache, cache_dir: File.join(root, 'tmp/cache/responses')

  disable :static

  enable :logging

  set :dump_errors, true

  helpers do
    def root
      self.class.root
    end

    def url_path
      request.path_info
    end

    def render_partial(name, locals: {})
      erb :"partials/#{name}/index.html", layout: false, locals: locals
    end

    def render_js_partial(name)
      erb :"partials/#{name}/index.js", layout: false
    end

    def render_js_module_inline(file_path)
      File.read(file_path).gsub(/^export /, '')
    end

    def send_static_file(url_path)
      send_file static_file_path_from(url_path)
    end

    def send_dynamic_file(url_path)
      file_path = dynamic_file_path_from(url_path)

      if file_path&.end_with?('.erb')
        content_type File.extname(url_path)

        read_erb_file(file_path)
      else
        send_static_file url_path
      end
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
    send_dynamic_file url_path
  end

  get %r{/views/(.+\.css)} do
    send_dynamic_file url_path
  end

  get '/404.html' do
    send_static_file '/public/404.html'
  end

  get '/sitemap.xml' do
    content_type 'application/xml'

    send_static_file '/sitemap.xml'
  end

  get '/llms.txt' do
    content_type 'text/plain'

    send_static_file '/llms.txt'
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

DevServer.run! if DevServer.app_file == $0
