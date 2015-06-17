ABetterPresent.Views.OptionsView = Backbone.CompositeView.extend({
  template: JST['options'],
  tagName: "main",
  className: "soft-bg",

  initialize: function (options) {
    this.addDesignView(options);
    this.addCharityForm(options);
    this.addFieldsForm(options);
  },

  addDesignView: function (options) {
    var designs = new ABetterPresent.Collections.CardDesigns();
    designs.fetch();
    this.addSubview(".design-select", new ABetterPresent.Views.CardDesignsView({
      collection: designs,
      directLoad: options.directLoad
    }));
  },

  addCharityForm: function (options) {
    this.charityForm = new ABetterPresent.Views.CharitiesForm({
      model: CurrentCard,
      collection: Charities
    });
    this.addSubview(".options-form", this.charityForm);
  },

  addFieldsForm: function (options) {

  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
});
