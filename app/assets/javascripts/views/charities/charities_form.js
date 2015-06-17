ABetterPresent.Views.CharitiesForm = Backbone.CompositeView.extend({
  template: JST['charities/form'],
  tagName: "form",
  initialize: function (options) {
    this.card = options.card;
  },

  render: function () {
    this.$el.html(this.template({ card: this.card }));
    return this;
  },

});
