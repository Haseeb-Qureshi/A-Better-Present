ABetterPresent.Views.HomeView = Backbone.View.extend({
  template: JST['home'],
  tagName: "main",
  className: "home-bg",

  events: {
    "click button#give-gift": "transitionToOptions",
  },

  render: function () {
    $('main').addClass('dandelion-bg');
    this.$el.html(this.template());
    return this;
  },

  transitionToOptions: function () {
    Backbone.history.navigate('options', { trigger: true })
  },
});
