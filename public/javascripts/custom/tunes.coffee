$ ->
  window.Album = Backbone.Model.extend()
  window.AlbumView = Backbone.View.extend
    initialize: ->
      @template = _.template($('#album-template').html())
    render: ->
      renderedContent = @template(@model.toJSON())
      $(@el).html(renderedContent)
      @

