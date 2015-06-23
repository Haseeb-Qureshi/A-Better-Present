ABetterPresent.Views.LogInView = Backbone.View.extend({
  template: JST['devise/new_session'],

  initialize: function () {
  },

  events: {
    'submit form': 'login'
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  login: function () {
    
  },
});
