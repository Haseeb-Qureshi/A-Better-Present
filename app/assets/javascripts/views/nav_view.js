ABetterPresent.Views.NavView = Backbone.View.extend({
  template: JST['nav'],
  tagName: "nav",
  className: "nav navbar-default",

  render: function () {
    this.$el.html(this.template());
    return this;
  },

});
