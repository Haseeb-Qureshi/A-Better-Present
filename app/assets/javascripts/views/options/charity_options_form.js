ABetterPresent.Views.CharityOptionsForm = Backbone.View.extend({
  template: JST['options/charity_options_form'],
  tagName: "form",

  initialize: function () {
    this.model.fetch();
  },

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

});
