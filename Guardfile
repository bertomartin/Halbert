# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', :output => 'public/javascripts/custom',
  :bare => true, :all_on_start => true do
  watch /public\/javascripts\/custom\/.*[.]coffee/
end

guard 'sass', :output => 'public/stylesheets/custom',
  :all_on_start => true do
  watch /public\/stylesheets\/custom\/.*[.]scss/
end
