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

  ShoesView:  Em.View.extend({
    templateName:  'shoes'
  }),
  ShoesController:  Em.ArrayController.extend(),

  SalutationView:  Em.View.extend({
    templateName:  'salutation'
  }),
  SalutationController:  Em.ObjectController.extend(),

  TraversalView:  Em.View.extend({
    templateName:  'traversal'
  }),
  TraversalController:  Em.ObjectController.extend(),

  ready: function(){
    console.log("Created App namespace");
  },
  Router: Ember.Router.extend({
    enableLogging:  true,

    goToCars:  Ember.Route.transitionTo('root.cars'),

    root:  Ember.Route.extend({
      index:  Ember.Route.extend({
        route:  '/',
        connectOutlets:  function(router, context){
          router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                            { greeting: "My Ember App" });
          router.get('applicationController').connectOutlet('body', 'traversal'); }
      }),
      shoes:  Ember.Route.extend({
        route: '/shoes',
        enter: function ( router ){
          console.log("The shoes sub-state was entered.");
        },
        connectOutlets:  function(router, context){
          router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                            { greeting: "Shoes Route" });
          router.get('applicationController').connectOutlet('body', 'shoes');
        }
      }),
      cars:  Ember.Route.extend({
        route: '/cars',
        enter: function ( router ){
          console.log("The cars sub-state was entered.");
        },
        connectOutlets:  function(router, context){
          router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                            { greeting: "Cars Route" });
          router.get('applicationController').connectOutlet('body', 'cars');
        }
      })
    })
  })
});

App.initialize();
