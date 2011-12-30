# Halbert

## TL;DR

  1.  `git clone` the repo
  1.  `bundle install`
  1.  `rake **halroku**`:  gets a basic Halbert running on heroku
  1.  `rake **halbert**`:  gets a basic Halbert running at `localhost:4567`
  1.  Get a basic web site that you can start working with
  1.  Hack the given sensible files, maybe use the Vim shortcuts to help
      editing be more streamlined (`vim_options.vim`)

## Purpose

Programming should be easy to explore with minimal muss and fuss.  To this end,
I have crated Halbert: a small little "shell" that allows you to get going with
little effort.  It includes the stack that I'm currently using at work running
on a small, light server, Sinatra.

The stack:

  1.  Coffeescript
  1.  SCSS
  1.  JQuery
  1.  Twitter Bootstrap

I plan on creating various branches off of this, but the nice thing is
that all that's required is a `rake` command (merely a wrapper around
Rack) and then you're good to try something out in the JS console, write
some custom SCSS, edit a bit of HTML in a nice, lean templating
language, or just hack around.

A re-launch of Halbert always re-compiles the assets before a Heroku
push or a local server startup.  You can, of course, use Guard or some
other asset manager to compile these files, but in keeping with
Halbert's lightweight, magic-minimal approach, I prefer to use Vim
autocommands.

I admit, it's nothing particularly groundbreaking and leans on the
brilliance of other developers, but it lets you just get to hacking with
nice, pretty tools.

## .gitignore

We ignore `.js` and `.css` files because they're ontologically secondary
to `coffee` and `scss` files.

## Naming

Named after Tom Halbert, my first CS teacher in high school who
admonished students to create "shell" code snippets for easy cut and
pasting so that we could get to the the business of coding more quickly.

## Author

Steven G. Harms
