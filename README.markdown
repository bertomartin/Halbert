# Halbert

## TL;DR

  1.  `git clone` the repo
  1.  `cd Halbert`
    1.  This will create a pristine rvm gemset called "Halbert"
    1.  This will be your root for Halbert operations
  1.  Start Halbert in one of two formats
    1.  `rake halroku`:  gets a basic Halbert running on heroku
    1.  `rake halbert`:  gets a basic Halbert running at `localhost:4567`
  1.  From here in the browser developer interface you have JQuery and
      you'll see the effects of some of the compiled CoffeeScript code.
      You're ready to explore and hack Javascript, Coffeescript, or CSS
  1.  Customize:  Editing files in `public/{javascripts, stylesheets, views}`
      does what you expect: write Coffeescript, SASS, or Slim templates in
      these directories.  Vim users might want to take shortcuts from `vim_options.vim`.
    1.  Re-compile and re-deploy to Heroku with `rake halroku` (for remote) or
        `rake` for a local, Sinatra-based server
    1.  Explore locally with your Sinatra-based Halbert instance running
        on localhost

## Purpose

Programming should be easy to explore with minimal muss and fuss.  

When someone gets the urge to learn to program or to sketch out an idea, the critical 
stumbling block to their creativity or interest is the arcane process of 
configuring a stack.

To this end, I have crated Halbert: a small little "shell" that allows
you to get going with little effort.  It includes the stack that I'm
currently using at work running on a small, light server.

The stack:

  1.  Coffeescript
  1.  SCSS
  1.  JQuery
  1.  Twitter Bootstrap

This is ideal for newcomers who can be deterred by environmental and
server configuration overhead.  It's also great for experienced developers
who want something that works quickly _and_ that's easily deployed and
shared via Heroku.

A re-launch of Halbert always re-compiles the assets before a Heroku
push or a local server startup.  You can, of course, use Guard or some
other asset manager to compile these files, but in keeping with
Halbert's lightweight, magic-minimal approach, I prefer to use Vim
autocommands.

Oh, and we have facilities for TDD with Evergreen + Jasmine.  Intermediate
users of Halbert may find benefit here.

Halbert lets you "just get hacking."

## Typical Workflow

### Try some SCSS

1.  `rake` :  starts the server locally
1.  Edit `public/stylesheets/custom/custom.scss`
1.  `rake compile`
1.  Point browser to `localhost:4567` to see results

### Try some Coffee

1.  `rake` :  starts the server locally
1.  Open another tab and go into the Halbert directory
1.  Edit `public/javascripts/custom/custom.coffee`, edit the given `alert` message
1.  Edit the coffeescript class: `tree.coffee`
1.  `rake compile`
1.  Point browser to `localhost:4567`
1.  Load up Webkit's console
1.  `t = new Tree('the_larch');`
1.  `b = new Bear('Edward', 'Bear'); b.greet();`

### Send all that to Heroku

`rake halroku`

### Kill Heroku App

`rake heroku:seppuku`

## Testing

`evergreen run` will run your tests if you've got Firefox installed.
Specs are written in Coffeescript and stored in `spec/javascripts` in
the form *name*\_spec.coffee.  You can use `bear_spec.coffee` as a
model.

## Naming

Named after Tom Halbert, my first CS teacher in high school who
admonished students to create "shell" code snippets for easy cut and
pasting so that we could get to the the business of coding more quickly.

## Author

Steven G. Harms
