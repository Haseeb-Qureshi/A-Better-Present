ABetterPresent.Views.PaymentView = Backbone.CompositeView.extend({
  tagName: "main",
  template: JST['payment'],

  events: {
    "click button": "goToNext",
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  goToNext: function () {
    this.$('div.spinner').removeClass("hidden");
    setTimeout(function () {
      Backbone.history.navigate("", { trigger: true });
    }, 2000);
  },
});
