set :root => File.dirname(__FILE__)
set :slim, :format => :html5
set :public_folder, File.dirname(__FILE__) + '/public'
set :views, settings.public_folder + '/views'

get '/' do
  slim :index, {:f => settings}
end

get '/albums' do
  content_type "application/json"
  File.readlines("public/albums.json")
end
