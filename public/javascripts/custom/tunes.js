$(function() {
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
  return window.Albums = Backbone.Collection.extend({
    model: Album,
    url: '/albums'
  });
});