ABetterPresent.Views.CharitiesForm = Backbone.CompositeView.extend({
  template: JST['charities/form'],
  tagName: "form",
  className: "charity-form",
  initialize: function (options) {
    this.card = options.card;
    this.listenTo(this.collection, "add", this.addCharity);
    this.collection.each(this.addCharity.bind(this));
  },

  addCharity: function (charity) {
    var charityItem = new ABetterPresent.Views.CharityFormItem({
      model: charity,
      card: CurrentCard,
    });
    this.addSubview(".charity-items", charityItem);
  },

  render: function () {
    this.$el.html(this.template({ card: this.card }));
    this.attachSubviews();
    return this;
  },

});
