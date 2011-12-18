task :default => :halbert

desc 'Start the Sinatra server for Halbert'
task :halbert => [:compile] do
  sh %{thin -C prod.yml -R config.ru start}
end

desc 'Start the Sinatra server for Halbert on Heroku'
task :heroku => [':pr:heroku_push'] do
  puts 'Lets run Halbert on Heroku!'
end

namespace :pr  do
  task :bundle do
    puts "Executing bundler for easy deployment pleasure"
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
  task :seppuku do
    hn = heroku_name.chomp!
    system %Q`heroku apps:destroy #{hn} --confirm #{hn}`
  end
end

namespace :assets do
  desc 'Compile the Coffeescript assets'
  task :cs do
    puts "Converting Coffeescript to Javascript"
    Dir.chdir 'public/javascripts/custom'
    Dir.glob('*.coffee').each do |infile|
      puts "\t...#{infile}"
      `coffee -c --bare #{infile}`
    end
  end

  desc 'Compile the SCSS assets'
  task :scss do
    puts "Converting SCSS to CSS"
    Dir.chdir 'public/stylesheets/custom'
    Dir.glob('*.scss').each do |infile|
      outfile = File.basename(infile, '.scss') + '.css'
      puts "\t...#{infile} #{outfile}"
      `scss #{infile} #{outfile}`
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
  heroku_paths = File.open(File.join(
    File.dirname(__FILE__), *%w[.git config])).readlines.grep(/heroku.com.*\.git/)
  raise "Expected only one heroku application" if heroku_paths.length > 1
  name = heroku_paths.pop.gsub(/.*:(.*)\.git$/,"\\1")
end
