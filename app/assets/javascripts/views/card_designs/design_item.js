ABetterPresent.Views.DesignItem = Backbone.View.extend({
  template: JST['card_designs/item'],
  className: "carousel-design",

  render: function () {
    this.$el.html(this.template({ design: this.model }));
    return this;
  },

});
