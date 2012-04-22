task :default => :halbert

desc 'Start the Sinatra server for Halbert'
task :halbert => [:compile] do
  sh %{thin -C prod.yml -R config.ru start}
end

desc 'Start the Sinatra server for Halbert on Heroku'
task :halroku => ['pr:heroku_push'] do
  puts 'Lets run Halbert on Heroku!'
  sh %{heroku open}
end

desc 'Boring alias for the halroku task'
task :heroku => [:halroku] {}

namespace :pr  do
  task :bundle do
    puts "Executing bundler for easy deployment pleasure"
    `gem install --no-rdoc --no-ri bundler`
    puts `bundle install`
  end

  task :heroku_validate => [:bundle, :compile] do
    print 'Verifying heroku...'
    unless has_heroku?
      puts 'Heroku not found...Creating!'
      puts `heroku create --stack cedar`
    else
      puts 'Heroku found!'
    end
  end

  task :heroku_push => [:heroku_validate] do
    # Compile creates the custom.css and custom.js files.
    # They are now added to the repo for the initial push
    `git add public`
    `git commit -m'Halbert: Adds custom.css|js'`
    puts `git push heroku master`
  end

  task :config => [:heroku_push] do
    puts "Preparing intial configuration of this Halbert installation"
    `heroku open`
message =<<EOM

Congratulations!  You have installed Halbert.  An explanation page
should be opening in your browser.  If you pop open a Javascript
console you'll have the ability to use "zazzle()" or play with a
"Bear" Javascript class.

For development purpopses, you can run the `rake halbert` task
which will start a local Sinatra server which you can work on.

The whole point of Halbert is easy exploration - be it locally or on Heroku.
Enjoy
EOM
  end
end

namespace :heroku do
  desc "Get the heroku name"
  task :name do
    puts heroku_name
  end
  desc "Destroy the heroku instance"
  task :seppuku do
    hn = heroku_name.chomp!
    system %Q`heroku apps:destroy #{hn} --confirm #{hn}`
  end
end

namespace :assets do
  desc 'Compile the Coffeescript assets'
  task :cs do
    puts "Converting Coffeescript to Javascript"
    begin
      Dir.chdir 'public/javascripts/custom'
    rescue Exception => ex
    STDERR.puts <<EOW

      Halbert could not find 'public/javascripts/custom', that's where your custom
      CoffeeScript files go.  Would you mind putting it back?

EOW
    end
    Dir.glob('*.coffee').each do |infile|
      outfile = File.basename(infile, '.coffee')
      puts "\t...#{infile} #{outfile}.js"
      `coffee -c --bare #{infile}`
    end
  end

  desc 'Compile the SCSS assets'
  task :scss do
    puts "Converting SCSS to CSS"
    Dir.chdir 'public/stylesheets/custom'
    Dir.glob('*.scss').each do |infile|
      outfile = File.basename(infile, '.scss')
      puts "\t...#{infile} #{outfile}.css"
      `scss #{infile} #{outfile}.css`
    end
  end
end

desc 'Compiles all the Coffeescript and SCSS assets'
task :compile do
  root = Dir.pwd
  puts ".-=* Compiling assets *=-."

  Rake::Task['assets:cs'].invoke
  Dir.chdir root

  Rake::Task['assets:scss'].invoke

  Dir.chdir root
end

private

def has_heroku?
  IO.popen("git remote show").readlines.map{|r| r.chomp}.include?('heroku')
end

def heroku_name
  git_file = File.join(File.dirname(__FILE__), *%w[.git config])
  heroku_paths = File.open(git_file).readlines.grep(/heroku.com.*\.git/)
  if heroku_paths.empty?
    raise "It doesn't look like Heroku is set up for this Halbert instancance"
  elsif heroku_paths.length > 1
    raise "Expected only one heroku application"
  else
    name = heroku_paths.pop.gsub(/.*:(.*)\.git$/,"\\1")
  end
  name
end
