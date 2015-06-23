ABetterPresent.Views.RootView = Backbone.CompositeView.extend({
  template: JST['root'],

  initialize: function () {
    window.TRANS_LENGTH = 900;
    window.CurrentCard = new ABetterPresent.Models.Card();
    window.Charities = new ABetterPresent.Collections.Charities();
    window.Designs = new ABetterPresent.Collections.CardDesigns();
    Charities.fetch();
  },

  renderHome: function () {
    this._swapView(new ABetterPresent.Views.HomeView());
  },

  renderSignUp: function () {
    this._swapView(new ABetterPresent.Views.NewUserView());
  },

  renderLogIn: function () {
    this._swapView(new ABetterPresent.Views.LogInView());
  },

  renderOptions: function () {
    var directLoad = !this._currentView; // variable delay to ensure carousel loads properly
    this._swapView(new ABetterPresent.Views.OptionsView({ directLoad: directLoad }));
  },

  renderCompose: function () {
    this._swapView(new ABetterPresent.Views.ComposeView());
  },

  renderPayment: function () {
    this._swapView(new ABetterPresent.Views.PaymentView());
  },

  renderSuccess: function (card) {
    this._swapView(new ABetterPresent.Views.SuccessView({ model: card }));
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
