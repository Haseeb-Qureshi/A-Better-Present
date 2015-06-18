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
    charities: {
      number: function (charities) {
        if (charities.length !== 3) {
          return "You must choose 3 charities.";
        }
      }
    },
    amount: {
      min: 10,
      msg: "Sorry, it has to be at least $10."

    },
    from: {
      minLength: 1,
      msg: "You gotta enter in an actual name!"
    },
    to: {
      minLength: 1,
      msg: "You gotta enter in an actual name!"
    }
  }
});
