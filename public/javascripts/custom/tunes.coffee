$ ->
  # these are roughly like controllers
  window.BackboneTunes = Backbone.Router.extend
   routes:
     '': 'home'
     'blank' : 'blank'
   initialize: -> #should instantiate the root-level view
     @libraryView = new LibraryView
       collection:  window.library
   home: ->
     $container = $('#container');
     $container.empty()
     $container.append(@libraryView.render().el);
   blank: ->
     $container = $('#container');
     $container.empty()
     $container.text("This is blanked out for your protection")


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



  window.Albums = Backbone.Collection.extend
    model: Album
    url: '/albums'

  window.library = new Albums()

  window.LibraryAlbumView = AlbumView.extend()

  window.LibraryView = Backbone.View.extend
    tagName: 'section'
    className: 'library'
    initialize:  ->
      _.bindAll(@, 'render')
      @template = _.template($('#library-template').html())
      @collection.bind('reset', this.render)
    render: ->
      $(@el).html(@template({}))
      $albums = @$('.albums')
      collection = @collection

      collection.each (album) ->
        view = new LibraryAlbumView
          model: album,
          collection: collection
        $albums.append(view.render().el)
      @


   window.App = new BackboneTunes();

   try
     Backbone.history.start();
   catch exception

   window.library.fetch()
