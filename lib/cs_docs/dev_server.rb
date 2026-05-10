# frozen_string_literal: true

require 'sinatra/base'
require 'yaml'

module CSDocs
  class DevServer < Sinatra::Base
    class << self
      def port
        @port ||= ENV.fetch('PORT', 8100).to_i
      end

      def root
        @root ||= File.expand_path('../..', __dir__)
      end
    end

    set :port, port
    set :views, File.join(root, 'src/views')

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

      def render_js_partial(name, locals: {})
        erb :"partials/#{name}/index.js", layout: false, locals: locals
      end

      def render_inline_js_module(file_path)
        File.read(file_path).gsub(/^export /, '')
      end

      def send_static_file(file_path)
        send_file file_path
      end

      def send_dynamic_file(file_path)
        if file_path&.end_with?('.erb')
          read_erb_file(file_path)
        else
          send_file file_path
        end
      end

      def send_custom_page_html(file_path)
        @html_content = read_erb_file(file_path)

        erb :"custom_page.html", layout: :"layouts/html_layout.html"
      end

      def send_doc_page_html(md_url_path)
        @markdown_path = md_url_path

        erb :"doc_page.html", layout: :"layouts/html_layout.html"
      end

      def send_doc_page_markdown(file_path)
        content_type 'text/markdown'

        @markdown_content = read_erb_file(file_path)

        erb :"doc_page.md", layout: :"layouts/markdown_layout.md"
      end

      def read_erb_file(file_path)
        erb(File.read(file_path), layout: false)
      end

      ##
      # Resolves directly to the exact path, no fallbacks.
      # Example: /public/logo.png -> src/public/logo.png
      #
      def static_file_path_from(file_path)
        File.join(root, 'src', file_path)
      end

      ##
      # Tries four candidates in order:
      # 1. Exact path          - src/custom_pages/home/styles.css
      # 2. ERB variant         - src/custom_pages/home/styles.css.erb
      # 3. Index variant       - src/custom_pages/home/styles/index.css
      # 4. Index ERB variant   - src/custom_pages/home/styles/index.css.erb
      # Returns the first one that exists on disk, or nil if none match.
      #
      def dynamic_file_path_from(file_path)
        resolved_file_path = static_file_path_from(file_path)

        return resolved_file_path if File.exist?(resolved_file_path)

        erb_file_path = resolved_file_path + ".erb"

        return erb_file_path if File.exist?(erb_file_path)

        extension = File.extname(resolved_file_path)

        index_file_path = resolved_file_path.delete_suffix(extension) + "/index" + extension

        return index_file_path if File.exist?(index_file_path)

        index_erb_file_path = index_file_path + ".erb"

        return index_erb_file_path if File.exist?(index_erb_file_path)
      end
    end

    ##
    # URL: /docs/basics.html -> URL: /docs/basics.md -> File: src/doc_pages/basics.md
    #
    get %r{/docs/(?<file_name>.+\.html)} do |file_name|
      md_url_path = "/docs/#{file_name.delete_suffix('.html')}.md"

      send_doc_page_html md_url_path
    end

    ##
    # URL: /docs/basics.md -> File: src/doc_pages/basics.md
    #
    get %r{/docs/(?<file_name>.+\.md)} do |file_name|
      file_path = dynamic_file_path_from("/doc_pages/#{file_name}")

      send_doc_page_markdown file_path
    end

    ##
    # URL: /assets/global/loaders/beforePageLoadStarted.js -> File: src/assets/global/loaders/beforePageLoadStarted.js.erb
    #
    get %r{/assets/(?:components|global|utils)/.+(?<ext>\.(?:js|css|svg|png|ico))} do |ext|
      file_path = dynamic_file_path_from(url_path)

      content_type ext

      send_dynamic_file file_path
    end

    ##
    # URL: /custom_pages/home/styles.css -> File: src/custom_pages/home/styles.css
    #
    get %r{/custom_pages/.+(?<ext>\.(?:js|css|svg|png|ico))} do |ext|
      file_path = dynamic_file_path_from(url_path)

      content_type ext

      send_dynamic_file file_path
    end

    ##
    # URL: /public/logo.png -> File: src/public/logo.png
    #
    get %r{/public/.+\.(?:js|css|svg|png|ico)} do
      file_path = static_file_path_from(url_path)

      send_static_file file_path
    end

    ##
    # URL: /views/doc_page.css -> File: src/views/doc_page.css
    # Some views and partials have CSS that lives next to them, this route makes those CSS browser-accessible.
    #
    get %r{/views/.+(?<ext>\.css)} do |ext|
      file_path = dynamic_file_path_from(url_path)

      content_type ext

      send_dynamic_file file_path
    end

    ##
    # URL: /404.html -> File: src/public/404.html
    #
    get '/404.html' do
      file_path = static_file_path_from('/public/404.html')

      send_static_file file_path
    end

    ##
    # URL: /sitemap.xml -> File: src/sitemap.xml
    #
    get '/sitemap.xml' do
      content_type 'application/xml'

      file_path = static_file_path_from('/sitemap.xml')

      send_static_file file_path
    end

    ##
    # URL: /llms.txt -> File: src/llms.txt
    #
    get '/llms.txt' do
      content_type 'text/plain'

      file_path = static_file_path_from('/llms.txt')

      send_static_file file_path
    end

    get '/healthcheck' do
      'ok'
    end

    ##
    # URL: / -> File: src/custom_pages/home/index.html.erb
    #
    get '/' do
      file_path = dynamic_file_path_from('/custom_pages/home/index.html')

      send_custom_page_html file_path
    end

    ##
    # URL: <any unmatched path> -> File: src/public/404.html
    #
    not_found do
      file_path = static_file_path_from('/public/404.html')

      send_static_file file_path
    end
  end
end

CSDocs::DevServer.run! if CSDocs::DevServer.app_file == $0
