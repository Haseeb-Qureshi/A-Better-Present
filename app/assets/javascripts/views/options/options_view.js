ABetterPresent.Views.OptionsView = Backbone.CompositeView.extend({
  template: JST['options'],
  tagName: "main",
  className: "soft-bg",

  initialize: function () {
    var designs = new ABetterPresent.Collections.CardDesigns();
    designs.fetch();
    this.addSubview(".container", new ABetterPresent.Views.CardDesignsView({
      collection: designs,
    }));
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
});
