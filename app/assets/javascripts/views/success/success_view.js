ABetterPresent.Views.SuccessView = Backbone.CompositeView.extend({
  tagName: "main",
  template: JST['success'],

  render: function () {
    this.$el.html(this.template());
    return this;
  },

});
