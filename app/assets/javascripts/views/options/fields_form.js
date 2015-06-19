ABetterPresent.Views.FieldsForm = Backbone.CompositeView.extend({
  template: JST['options/fields_form'],
  tagName: "form",

  initialize: function () {
    this.validateForm();
  },

  events: {
    "submit": "handleSubmit",
  },

  render: function () {
    this.$el.html(this.template({ card: this.model, name: this.randomName() }));
    this.$('#amount').maskMoney({
      prefix: "$",
      affixesStay: false,
    });
    return this;
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

  handleSubmit: function (event) {
    event.preventDefault();
  },

  validateForm: function () {
    this.$el.validate();
  },

  triggerErrors: function () {
    this.$el.submit();
  },

  serializeForm: function () {
    var formData = this.$el.serializeJSON();
    return formData ? formData.card : {};
  },
});
