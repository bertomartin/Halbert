App.exampleController = Ember.Object.create({
  favorite_ice_cream: "Rocky Road",
  summon_an_example:  function(){
    return App.Example.create();
  }
});
