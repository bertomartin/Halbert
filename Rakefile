task :default => :halbert

desc 'Start the Sinatra server for Halbert'
task :halbert do
  sh %{thin -C prod.yml -R config.ru start}
end
