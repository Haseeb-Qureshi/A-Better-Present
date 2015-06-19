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
    "change input[type='checkbox']": "updateCharities",
  },

  addCharity: function (charity) {
    var charityItem = new ABetterPresent.Views.CharityFormItem({
      model: charity,
      card: CurrentCard,
    });
    this.addSubview(".charity-items", charityItem);
  },

  updateCharities: function () {
    var cardData = this.$el.serializeJSON().card || { charities: [] };
    this.updateCounter(cardData);
    CurrentCard.set(CurrentCard.parse(cardData));
  },

  updateCounter: function (cardData) {
    var count = cardData.charities.length;
    if (count < 3) {
      this.$('label.error').html("Please select " + (3 - count) +
        " more charit" + ( count === 2 ? "y." : "ies."));
    } else if (count > 3) {
      this.$('label.error').html("You can only select 3 charities.");
    } else {
      this.$('label.error').empty();
    }
  },

  serializeForm: function () {
    var formData = this.$el.serializeJSON();
    return formData ? formData.card : {};
  },

  triggerErrors: function () {
    this.updateCharities();
  },

  render: function () {
    this.$el.html(this.template({ card: this.card }));
    this.attachSubviews();
    return this;
  },

});
