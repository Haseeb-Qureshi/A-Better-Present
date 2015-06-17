ABetterPresent.Models.Card = Backbone.Model.extend({
  rootUrl: "/api/cards",

  constructor: function (options) {
    this.charities = new ABetterPresent.Collections.Charities();
    Backbone.Model.apply(this, arguments);
  },

  parse: function (response) {
    var that = this;
    if (response.charities) {
      this.charities.set(response.charities, { parse: true });
      delete response.charities;
    }

    return response;
  },
});
