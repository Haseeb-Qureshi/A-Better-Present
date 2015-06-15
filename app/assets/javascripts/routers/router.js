ABetterPresent.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "home",
  },

  home: function () {
    this._swapView(new ABetterPresent.Views.HomeView());
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    view.render();
    this.$rootEl.html(view);
    return view;
  },

});
