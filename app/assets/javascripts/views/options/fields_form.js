ABetterPresent.Views.FieldsForm = Backbone.CompositeView.extend({
  template: JST['options/fields_form'],
  tagName: "form",

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

  validateFrom: function () {
    this.$el.validate({
      rules: {
        "card[from]": {
          required: true,
          minlength: 1,
        },
      },
      tooltip_options: {
        "card[from]": { placement: 'right' },
      },
    });
  },

  validateFor: function () {
    this.$el.validate({
      rules: {
        "card[for]": {
          required: true,
          minlength: 1
        },
      },
      tooltip_options: {
        "card[for]": { placement: 'right' },
      },
    });
  },

  validateAmount: function () {
    this.$el.validate({
      rules: {
        "card[amount]": {
          required: true,
          min: 10
        },
      },
      tooltip_options: {
        "card[amount]": { placement: 'right' },
      },
    });
  },
});
