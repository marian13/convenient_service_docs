require 'sinatra'
require 'redcarpet'

set :port, 3000
set :public_folder, __dir__

MARKDOWN = Redcarpet::Markdown.new(
  Redcarpet::Render::HTML,
  fenced_code_blocks: true,
  tables: true
)

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '*.html' do
  file = File.join(settings.public_folder, request.path_info)
  halt 404 unless File.exist?(file)
  send_file file
end

get '*.md' do
  file = File.join(settings.public_folder, request.path_info)
  halt 404 unless File.exist?(file)
  @title = File.basename(request.path_info, '.md')
  @content = MARKDOWN.render(File.read(file))
  erb :doc
end
