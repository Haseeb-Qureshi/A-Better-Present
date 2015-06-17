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
    this.designView = new ABetterPresent.Views.CardDesignsView({
      collection: designs,
      directLoad: options.directLoad
    });
    this.addSubview(".design-select", this.designView);
  },

  addCharityForm: function (options) {
    this.charityForm = new ABetterPresent.Views.CharitiesForm({
      model: CurrentCard,
      collection: Charities
    });
    this.addSubview(".options-form", this.charityForm);
  },

  addFieldsForm: function (options) {
    this.fieldsForm = new ABetterPresent.Views.FieldsForm({
      model: CurrentCard,
    });
    this.addSubview(".fields-form", this.fieldsForm);
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
});
