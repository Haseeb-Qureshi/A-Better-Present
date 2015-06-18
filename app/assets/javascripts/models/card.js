ABetterPresent.Models.Card = Backbone.Model.extend({
  urlRoot: "/api/cards",

  constructor: function (options) {
    this.charities = new ABetterPresent.Collections.Charities();
    Backbone.Model.prototype.constructor.apply(this, arguments);
  },

  parse: function (response) {
    if (response && response.charities) {
      this.charities.set(response.charities, { parse: true });
      delete response.charities;
    }

    return response;
  },

  validation: {
    charities: function (charities) {
      if (!charities || charities.length !== 3) {
        return "You must choose 3 charities.";
      }
    },
    amount: {
      required: true,
      min: 10,
    },
    sender_name: {
      required: true,
      minLength: 1,
    },
    recipient_name: {
      required: true,
      minLength: 1,
    },
    card_designs_id: {
      required: true,
      min: 0,
    },
  }
});
