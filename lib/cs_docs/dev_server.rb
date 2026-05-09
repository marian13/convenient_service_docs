# frozen_string_literal: true

require 'sinatra/base'
require 'yaml'
require 'fileutils'
require 'rack'

module CSDocs
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
        @root ||= File.expand_path('../..', __dir__)
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
      def config
        @config ||= YAML.load_file(File.join(root, 'config.yml'), symbolize_names: true)
      end

      def root
        self.class.root
      end

      def url_path
        request.path_info
      end

      def render_html_partial(name, locals: {})
        erb :"partials/#{name}/index.html", layout: false, locals: locals
      end

      def render_js_partial(name)
        erb :"partials/#{name}/index.js", layout: false
      end

      def render_js_module_inline(file_path)
        File.read(file_path).gsub(/^export /, '')
      end

      def send_static_file(file_path)
        send_file file_path
      end

      def send_dynamic_file(file_path)
        if file_path&.end_with?('.erb')
          content_type File.extname(file_path.delete_suffix('.erb'))

          read_erb_file(file_path)
        else
          send_file file_path
        end
      end

      def send_custom_page_html(file_path)
        @content = read_erb_file(file_path)

        erb :"custom_page.html", layout: :"layouts/html_layout.html"
      end

      def send_doc_page_html(file_path)
        @path = file_path

        erb :"doc_page.html", layout: :"layouts/html_layout.html"
      end

      def send_doc_page_markdown(file_path)
        content_type 'text/markdown'

        @content = read_erb_file(file_path)

        erb :"doc_page.md", layout: :"layouts/markdown_layout.md"
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

      def static_file_path_from(file_path)
        File.join(root, 'src', file_path)
      end

      def dynamic_file_path_from(file_path)
        resolved_file_path = static_file_path_from(file_path)

        return resolved_file_path if file_exist?(resolved_file_path)

        erb_file_path = resolved_file_path + ".erb"

        return erb_file_path if file_exist?(erb_file_path)

        extension = File.extname(resolved_file_path)

        index_file_path = resolved_file_path.delete_suffix(extension) + "/index" + extension

        return index_file_path if file_exist?(index_file_path)

        index_erb_file_path = index_file_path + ".erb"

        return index_erb_file_path if file_exist?(index_erb_file_path)
      end

      def url_path_from(file_path)
        file_path.delete_prefix(File.join(root, 'src'))
      end
    end

    get %r{/docs/(?<file_name>.+\.html)} do |file_name|
      file_path = "/docs/#{file_name.delete_suffix('.html')}.md"

      send_doc_page_html file_path
    end

    get %r{/docs/(?<file_name>.+\.md)} do |file_name|
      file_path = dynamic_file_path_from("/doc_pages/#{file_name}")

      send_doc_page_markdown file_path
    end

    get %r{/assets/(components|global|utils)/(.+\.(js|css|svg|png|ico))} do
      file_path = dynamic_file_path_from(url_path)

      send_dynamic_file file_path
    end

    get %r{/custom_pages/(.+\.(js|css|svg|png|ico))} do
      file_path = dynamic_file_path_from(url_path)

      send_dynamic_file file_path
    end

    get %r{/public/(.+\.(js|css|svg|png|ico))} do
      file_path = static_file_path_from(url_path)

      send_static_file file_path
    end

    get %r{/views/(.+\.css)} do
      file_path = dynamic_file_path_from(url_path)

      send_dynamic_file file_path
    end

    get '/404.html' do
      file_path = static_file_path_from('/public/404.html')

      send_static_file file_path
    end

    get '/sitemap.xml' do
      content_type 'application/xml'

      file_path = static_file_path_from('/sitemap.xml')

      send_static_file file_path
    end

    get '/llms.txt' do
      content_type 'text/plain'

      file_path = static_file_path_from('/llms.txt')

      send_static_file file_path
    end

    get '/healthcheck' do
      'ok'
    end

    get '/' do
      file_path = dynamic_file_path_from('/custom_pages/home/index.html')

      send_custom_page_html file_path
    end

    not_found do
      file_path = static_file_path_from('/public/404.html')

      send_static_file file_path
    end
  end
end

CSDocs::DevServer.run! if CSDocs::DevServer.app_file == $0
