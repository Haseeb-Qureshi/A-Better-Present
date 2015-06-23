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

  login: function (event) {
    event.preventDefault();
    var that = this;

    this.$('input.btn-primary').button('loading');
    this.$('.alert-error').remove();

    var form = this.$('form').serializeJSON();

    this.model.save(form.user, {
      success: function (userSession, response) {
        this.$('input.btn-primary').button('reset');
        ABetterPresent.CurrentUser = new ABetterPresent.Models.User(response);
      },
      error: function (userSession, response) {
        var result = $.parseJSON(response.responseText);
        // this.$('form').prepend(ABetterPresent.Helpers.Notifications.error(results.error));
        this.$('input.btn-primary').button('reset');
      },
    });
  },
});
