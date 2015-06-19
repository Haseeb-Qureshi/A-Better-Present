ABetterPresent.Views.ComposeView = Backbone.CompositeView.extend({
  tagName: "main",
  template: JST['compose'],

  events: {
    "click button": "printThings",
  },

  render: function () {
    this.$el.html(this.template({ card: CurrentCard }));
    this.$('#redactor').redactor();
    return this;
  },

  printThings: function () {
    console.log(this.$('#redactor').redactor('code.get'));
  },
});
