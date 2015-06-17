ABetterPresent.Views.CharitiesForm = Backbone.CompositeView.extend({
  template: JST['charities/form'],
  tagName: "form",
  className: "charity-form",
  initialize: function (options) {
    this.card = options.card;
    this.listenTo(this.collection, "add", this.addCharity);
    this.collection.each(this.addCharity.bind(this));
  },

  events: {
    "change input[type='checkbox']:checked": "updateCharities",
  },

  addCharity: function (charity) {
    var charityItem = new ABetterPresent.Views.CharityFormItem({
      model: charity,
      card: CurrentCard,
    });
    this.addSubview(".charity-items", charityItem);
  },

  updateCharities: function () {
    var data = this.$el.serializeJSON();
    CurrentCard.set(CurrentCard.parse(data.card));
  },

  render: function () {
    this.$el.html(this.template({ card: this.card }));
    this.attachSubviews();
    return this;
  },

});
