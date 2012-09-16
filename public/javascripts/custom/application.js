window.App = Ember.Application.create({
  ApplicationView: Ember.View.extend({
    templateName:  'application',
    classNames: ['application-view']
  }),
  ApplicationController: Ember.Controller.extend({
    slogan: 'A framework for creating ambitious web applications',
    isSlogan: true
  }),
  ready: function(){
    console.log("Created App namespace");
  },
  Router: Ember.Router.extend({
    enableLogging:  true,
    root:  Ember.Route.extend({
      index:  Ember.Route.extend({
        route:  '/'
      })
    })
  })
});

App.initialize();
