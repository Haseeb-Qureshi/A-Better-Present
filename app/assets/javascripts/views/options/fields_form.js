ABetterPresent.Views.FieldsForm = Backbone.CompositeView.extend({
  template: JST['options/fields_form'],

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },
});
