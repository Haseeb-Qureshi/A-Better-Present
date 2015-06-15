ABetterPresent.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "home",
    "options": "options",
  },

  home: function () {
    this._swapView(new ABetterPresent.Views.HomeView());
  },

  options: function() {
    this._swapView(new ABetterPresent.Views.OptionsView());
  },

  _swapView: function (view) {
    var that = this;
    if (this.currentView) {
        this.currentView.$el.fadeOut(1000, function() {
          that.currentView.remove();
          that.currentView = view;
          that.$rootEl.html(view.render().$el.hide().fadeIn(1000));
        });
    } else {
      that.currentView = view;
      this.$rootEl.html(view.render().$el);
    }
  },

});
