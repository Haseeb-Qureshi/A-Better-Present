ABetterPresent.Views.NewUserView = Backbone.View.extend({
  template: JST['devise/new_user'],

  events: {
    'submit form': ''
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },
});
