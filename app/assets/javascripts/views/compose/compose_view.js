ABetterPresent.Views.ComposeView = Backbone.CompositeView.extend({
  tagName: "main",
  template: JST['compose'],

  events: {
    "click button": "goToNext",
  },

  render: function () {
    this.$el.html(this.template({ card: CurrentCard }));
    this.$('#redactor').redactor();
    return this;
  },

  goToNext: function () {
    Backbone.history.navigate("payment", { trigger: true });
  },
});
