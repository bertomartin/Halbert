$(function() {
  window.Album = Backbone.Model.extend();
  return window.AlbumView = Backbone.View.extend({
    initialize: function() {
      return this.template = _.template($('#album-template').html());
    },
    render: function() {
      var renderedContent;
      renderedContent = this.template(this.model.toJSON());
      $(this.el).html(renderedContent);
      return this;
    }
  });
});