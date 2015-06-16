ABetterPresent.Views.OptionsView = Backbone.CompositeView.extend({
  template: JST['options'],
  tagName: "main",
  className: "soft-bg",

  initialize: function (options) {
    var designs = new ABetterPresent.Collections.CardDesigns();
    designs.fetch();
    this.addSubview(".container", new ABetterPresent.Views.CardDesignsView({
      collection: designs,
      directLoad: options.directLoad
    }));

    this.cardForm = new ABetterPresent.Views.CardOptionsForm({
      model: new ABetterPresent.Models.Card()
    });
    this.addSubview("options-form", this.cardForm);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
});
