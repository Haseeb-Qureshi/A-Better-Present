ABetterPresent.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.nav = new ABetterPresent.Views.NavView();
    this.$rootEl.append(this.nav.render().$el);
    this.rootView = new ABetterPresent.Views.RootView();
    this.$rootEl.append(this.rootView.render().$el);
    window.addEventListener('popstate', function(e) {
      Backbone.history.navigate(Backbone.history.getFragment(), { trigger: true });
    });
  },

  routes: {
    "": "home",
    "options": "options",
  },

  home: function () {
    this.rootView.renderHome();
  },

  options: function() {
    this.rootView.renderOptions();
  },
});
