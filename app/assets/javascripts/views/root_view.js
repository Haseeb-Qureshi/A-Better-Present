ABetterPresent.Views.RootView = Backbone.CompositeView.extend({
  template: JST['root'],

  initialize: function () {

  },

  renderHome: function () {
    this._swapView(new ABetterPresent.Views.HomeView());
  },

  renderOptions: function () {
    this._swapView(new ABetterPresent.Views.OptionsView());
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  _swapView: function (view) {
    var that = this;
    if (this.currentView) {
        this.currentView.$el.fadeOut(1000, function () {
          that.currentView.remove();
          that.currentView = view;
          that.$el.html(view.render().$el.hide().fadeIn(1000));
        });
    } else {
      that.currentView = view;
      this.$el.html(view.render().$el);
    }
  },
});
