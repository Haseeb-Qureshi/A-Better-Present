ABetterPresent.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.nav = new ABetterPresent.Views.NavView();
    this.$rootEl.append(this.nav.render().$el);
    this.rootView = new ABetterPresent.Views.RootView();
    this.$rootEl.append(this.rootView.render().$el);

    // listen for back button
    window.addEventListener('popstate', function(e) {
      Backbone.history.navigate(Backbone.history.getFragment(), { trigger: true });
    });
  },

  routes: {
    "": "home",
    "sign_up": "signUp",
    "log_in": "logIn",
    "options": "options",
    "compose": "compose",
    "payment": "payment",
    "success": "success",
  },

  home: function () {
    this.rootView.renderHome();
  },

  signUp: function () {
    this.rootView.renderSignUp();
  },

  logIn: function () {
    this.rootView.renderLogIn();
  },

  options: function() {
    this.rootView.renderOptions();
  },

  compose: function () {
    this.rootView.renderCompose();
  },

  payment: function () {
    this.rootView.renderPayment();
  },

  success: function () {
    this.rootView.renderSuccess();
  },
});
