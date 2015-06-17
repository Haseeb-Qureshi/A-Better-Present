ABetterPresent.Views.CharityFormItem = Backbone.CompositeView.extend({
  template: JST['charities/form_item'],
  className: "checkbox",
  initialize: function (options) {
    this.card = options.card;
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ card: this.card, charity: this.model }));
    return this;
  },
});
