App.ExampleModel = Ember.Object.extend(App.ExampleMixin, {
  init:  function(){
    this._super()
    Ember.log("ExampleModel just didi init.")
  }
})
