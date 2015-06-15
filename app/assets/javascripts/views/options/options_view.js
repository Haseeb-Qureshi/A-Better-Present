ABetterPresent.Views.OptionsView = Backbone.CompositeView.extend({
  template: JST['options'],
  tagName: "main",

  render: function () {
    this.$el.html(this.template());
    return this;
  },
});
