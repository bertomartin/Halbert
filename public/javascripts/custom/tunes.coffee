$ ->
  window.Album = Backbone.Model.extend
    isFirstTrack: (index) ->
      index is 0
    isLastTrack: (index) ->
      index+1 is (@.get('tracks').length)


  window.AlbumView = Backbone.View.extend
    tagName:  'li'
    className: 'album'
    initialize: ->
      # All methods that are to be used as callbacks must be defined in this
      # command's argument list.
      _.bindAll(this, 'render')
      @model.bind('change', @render)
      @template = _.template($('#album-template').html())
    render: ->
      renderedContent = @template(@model.toJSON())
      $(@el).html(renderedContent)
      @
