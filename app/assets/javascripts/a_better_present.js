window.ABetterPresent = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);
    var router = new ABetterPresent.Routers.Router({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  ABetterPresent.initialize();
});
