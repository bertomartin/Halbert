$(function() {
  window.BackboneTunes = Backbone.Router.extend({
    routes: {
      '': 'home',
      'blank': 'blank'
    },
    initialize: function() {
      return this.libraryView = new LibraryView({
        collection: window.library
      });
    },
    home: function() {
      var $container;
      $container = $('#container');
      $container.empty();
      return $container.append(this.libraryView.render().el);
    },
    blank: function() {
      var $container;
      $container = $('#container');
      $container.empty();
      return $container.text("This is blanked out for your protection");
    }
  });
  window.Album = Backbone.Model.extend({
    isFirstTrack: function(index) {
      return index === 0;
    },
    isLastTrack: function(index) {
      return index + 1 === (this.get('tracks').length);
    }
  });
  window.AlbumView = Backbone.View.extend({
    tagName: 'li',
    className: 'album',
    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      return this.template = _.template($('#album-template').html());
    },
    render: function() {
      var renderedContent;
      renderedContent = this.template(this.model.toJSON());
      $(this.el).html(renderedContent);
      return this;
    }
  });
  window.Albums = Backbone.Collection.extend({
    model: Album,
    url: '/albums'
  });
  window.library = new Albums();
  window.LibraryAlbumView = AlbumView.extend();
  window.LibraryView = Backbone.View.extend({
    tagName: 'section',
    className: 'library',
    initialize: function() {
      _.bindAll(this, 'render');
      this.template = _.template($('#library-template').html());
      return this.collection.bind('reset', this.render);
    },
    render: function() {
      var $albums, collection;
      $(this.el).html(this.template({}));
      $albums = this.$('.albums');
      collection = this.collection;
      collection.each(function(album) {
        var view;
        view = new LibraryAlbumView({
          model: album,
          collection: collection
        });
        return $albums.append(view.render().el);
      });
      return this;
    }
  });
  window.App = new BackboneTunes();
  try {
    Backbone.history.start();
  } catch (exception) {

  }
  return window.library.fetch();
});