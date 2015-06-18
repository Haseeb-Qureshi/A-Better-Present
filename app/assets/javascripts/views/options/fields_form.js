ABetterPresent.Views.FieldsForm = Backbone.CompositeView.extend({
  template: JST['options/fields_form'],
  tagName: "form",

  initialize: function () {
    this.validateForm();
  },

  render: function () {
    this.$el.html(this.template({ card: this.model, name: this.randomName() }));
    this.$('#amount').maskMoney({
      prefix: "$",
      affixesStay: false,
    });
    // this.initializeForm();
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

  validateForm: function () {
    this.$el.validate();
  },

  serializeForm: function () {
    var formData = this.$el.serializeJSON();
    return formData ? formData.card : {};
  },

  // initializeForm: function () {
  //   var that = this;
  //   this.$el.validate({
  //     showErrors: function(errorMap, errorList) {
  //         // Clean up any tooltips for valid elements
  //         that.$el.each(this.validElements(), function (index, element) {
  //             var $element = $(element);
  //
  //             $element.data("title", "") // Clear the title - there is no error associated anymore
  //                 .removeClass("error")
  //                 .tooltip("destroy");
  //         });
  //         // Create new tooltips for invalid elements
  //         that.$el.each(errorList, function (index, error) {
  //             var $element = $(error.element);
  //
  //             $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
  //                 .data("title", error.message)
  //                 .addClass("error")
  //                 .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
  //         });
  //     },
  //
  //     submitHandler: function(form) {
  //         alert("This is a valid form!");
  //     }
  //   });
  // }
});
