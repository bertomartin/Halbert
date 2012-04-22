larry = ->
  console.log "Wouldn't you like to larry?"

chippa = ->
  console.log "Are you the C"

App = Ember.Application.create

App.AdviceView = Ember.View.extend
  templateName: 'advice'
  smile:  'Smiles are great!'
