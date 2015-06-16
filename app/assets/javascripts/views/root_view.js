ABetterPresent.Views.RootView = Backbone.CompositeView.extend({
  template: JST['root'],

  initialize: function () {
    window.TRANS_LENGTH = 900;
  },

  renderHome: function () {
    this._swapView(new ABetterPresent.Views.HomeView());
  },

  renderOptions: function () {
    var directLoad = !this._currentView;
    this._swapView(new ABetterPresent.Views.OptionsView({ directLoad: directLoad }));
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  _swapView: function (view) {
    var that = this;
    if (this._currentView) {
        this._currentView.$el.fadeOut(TRANS_LENGTH, function () {
          that._currentView.remove();
          that._currentView = view;
          that.$el.html(view.render().$el.hide().fadeIn(TRANS_LENGTH));
        });
    } else {
      that._currentView = view;
      this.$el.html(view.render().$el);
    }
  },
});
