ABetterPresent.Views.HomeView = Backbone.View.extend({
  template: JST['home'],

  events: {
    "click button#give-gift": "transitionToOptions",
  },

  render: function () {
    this.$el.html(this.template());
    $.BgSwitcher({
      images: ["assets/dandelion-bg.jpg"],
      effect: "fade",
    })
    // $('#page-body').addClass("dandelion-bg");
    return this;
  },

  transitionToOptions: function () {
    this.$el.fadeOut(1000);
    $('#page-body').removeClass("dandelion-bg");
  },
});
