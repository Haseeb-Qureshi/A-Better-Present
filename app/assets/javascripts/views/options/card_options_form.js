ABetterPresent.Views.CardOptionsForm = Backbone.View.extend({
  template: JST['options/card_options_form'],
  tagName: "form",
  initialize: function () {
    THISGLOBAL = this;
    console.log(this.$el.serializeJSON());
  },

  render: function () {
    console.log("here's stuff");
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

});
