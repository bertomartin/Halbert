# Halbert

## TL;DR

  1.  `git clone` the repo
  1.  `cd Halbert`
    1.  This will create a pristine rvm gemset called "Halbert"
    1.  This will be your root for Halbert operations
  1.  Start Halbert in one of two formats
    1.  `rake halroku`:  gets a basic Halbert running on heroku
    1.  `rake halbert`:  gets a basic Halbert running at `localhost:4567`
  1.  Hack the given sensible files, maybe use the Vim shortcuts to help
      editing be more streamlined (`vim_options.vim`)
    1.  Re-compile and re-deploy to Heroku with `rake halroku`
    1.  Explore locally with your Sinatra-based Halbert instance running
        on localhost

## Purpose

Programming should be easy to explore with minimal muss and fuss.  How many
times have we seen an excited would-be Rails programmer get bogged down
in the minutiae of /usr/bin/rails versus and rvm-based rails versus some
installer pack rails?  It's too busy to get from "I'm curious and I
suck" to "I feel great, this tool must be great!"

To this end, I have crated Halbert: a small little "shell" that allows
you to get going with little effort.  It includes the stack that I'm
currently using at work running on a small, light server.

The stack:

  1.  Coffeescript
  1.  SCSS
  1.  JQuery
  1.  Twitter Bootstrap

A re-launch of Halbert always re-compiles the assets before a Heroku
push or a local server startup.  You can, of course, use Guard or some
other asset manager to compile these files, but in keeping with
Halbert's lightweight, magic-minimal approach, I prefer to use Vim
autocommands.

I admit, it's nothing particularly groundbreaking and leans on the
brilliance of other developers, but it lets you just get to hacking with
nice, pretty tools.

## Typical Workflow

### Try some SCSS

1.  `rake` :  starts the server locally
1.  Edit `public/stylesheets/custom/custom.scss`
1.  `rake compile`
1.  Point browser to `localhost:4567` to see results

### Try some Coffee

1.  `rake` :  starts the server locally
1.  Edit `public/stylesheets/custom/custom.coffee`
1.  Create a class called 'Tree', save it to `tree.coffee`
1.  `rake compile`
1.  Point browser to `localhost:4567`
1.  Load up Webkit's console
1.  `t = new Tree('the_larch');`
1.  `b = new Bear('Edward', 'Bear'); b.greet();`

### Send all that to Heroku

`rake halroku`

### Kill Heroku App

`rake heroku:seppuku`

## Naming

Named after Tom Halbert, my first CS teacher in high school who
admonished students to create "shell" code snippets for easy cut and
pasting so that we could get to the the business of coding more quickly.

## Author

Steven G. Harms
