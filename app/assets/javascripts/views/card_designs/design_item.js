ABetterPresent.Views.DesignItem = Backbone.View.extend({
  template: JST['card_designs/item'],
  className: "item",

  initialize: function (options) {
    this.active && this.$el.addClass("active");
  },

  render: function () {
    this.$el.html(this.template({ design: this.model }));
    return this;
  },

});
