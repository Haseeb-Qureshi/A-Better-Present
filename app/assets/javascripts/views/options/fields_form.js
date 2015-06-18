ABetterPresent.Views.FieldsForm = Backbone.CompositeView.extend({
  template: JST['options/fields_form'],

  render: function () {
    this.$el.html(this.template({ card: this.model, name: this.randomName() }));
    this.$('#amount').maskMoney({
      prefix: "$",
      affixesStay: false,
    })
    return this;
  },

  events: {
    "blur input#for": "validateFor",
    "blur input#from": "validateFrom",
    "blur input#amount": "validateAmount",
  },

  randomName: function () {
    return _.sample([
      "Winston Churchill",
      "Abraham Lincoln",
      "Dr. Frankenstein",
      "Mother Goose",
      "Huckleberry Finn",
      "Casper the Friendly Ghost",
      "My cats, collectively",
      "Rhesus of Thrace",
      "To whom it may concern",
      "Quetzacoatl",
      "Harrison Ford",
      "All of the Jackson Five",
      "Magni, son of Thor",
      "Galileo Galilei",
      "Freddy Mercury",
      "William Wallace",
      "Jiminy Cricket",
      "Bilbo Baggins",
      "What's-his-face",
    ]);
  },

  validateAmount: function () {
    $(document).tooltip();
  },
});
