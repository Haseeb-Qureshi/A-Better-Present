ABetterPresent.Views.CardOptionsForm = Backbone.View.extend({
  template: JST['options/card_options_form'],
  tagName: "form",
  initialize: function () {
    console.log(this.$el.serializeJSON());
  },

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

});
