ABetterPresent.Views.ComposeView = Backbone.CompositeView.extend({
  template: JST['compose'],

  events: {
    "click button": "printThings",
  },

  render: function () {
    this.$el.html(this.template);
    this.$('#redactor').redactor();
    return this;
  },

  printThings: function () {
    console.log(this.$('#redactor').redactor('code.get'));
  },
});
