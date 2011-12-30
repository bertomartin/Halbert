# Halbert

## TL;DR

  1.  git clone the repo
  1.  rake **heroku**:   gets a basic Halbert running on heroku
  1.  rake **halbert**:  gets a basic Halbert running locally on Sinatra
  1.  Get a basic web site that you can start working with
  1.  Hack the given sensible files, maybe use the Vim includes to help
      editing be more speedy

## Purpose

Programming should be easy to explore with minimal muss and fuss.  To this end,
I have crated Halbert: a small little "shell" that allows you to get going with
less effort.  It includes the stack that I'm currently using at work running
on a small, lite server, Sinatra.

The stack:

  1.  Coffeescript
  1.  SCSS
  1.  JQuery
  1.  Twitter Bootstrap

I plan on creating various branches off of this, but the nice thing is that
all that's required is a `rackup` and then you're good to try something
out in the JS console, write some custom SCSS (use my included vim code
to execute a "\sc" `sass compile`.  If you edit a coffeescript file
where the other coffeescript files are, guess what, a relaunch of
Halbert builds them and slots them and does the sensible thing so that
you can get back to experimentation.

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
