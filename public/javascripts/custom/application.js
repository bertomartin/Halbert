window.App = Ember.Application.create({
  ApplicationView: Ember.View.extend(),
  ApplicationController: Ember.Controller.extend(),
  ready: function(){
    console.log("Created App namespace");
  },
  Router: Ember.Router.extend({
    root:  Ember.Route.extend({
      index:  Ember.Route.extend({
        route:  '/'
      })
    })
  })
});

App.initialize();
