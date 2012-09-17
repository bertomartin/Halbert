window.App = Ember.Application.create({
  ApplicationView: Ember.View.extend({
    templateName:  'application',
    classNames: ['application-view']
  }),
  ApplicationController: Ember.Controller.extend({
    slogan: 'A framework for creating ambitious web applications',
    isSlogan: true
  }),

  CarsView:  Em.View.extend({
    templateName:  'cars'
  }),
  CarsController:  Em.ArrayController.extend(),


  ready: function(){
    console.log("Created App namespace");
  },
  Router: Ember.Router.extend({
    enableLogging:  true,
    root:  Ember.Route.extend({
      index:  Ember.Route.extend({
        route:  '/'
      }),
      shoes:  Ember.Route.extend({
        route: '/shoes',
        enter: function ( router ){
          console.log("The shoes sub-state was entered.");
        },
      }),
      cars:  Ember.Route.extend({
        route: '/cars',
        enter: function ( router ){
          console.log("The cars sub-state was entered.");
        },
        connectOutlets:  function(router, context){
          router.get('applicationController').connectOutlet('cars');
        }
      })
    })
  })
});

App.initialize();
