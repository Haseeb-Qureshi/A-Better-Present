ABetterPresent.Views.CardDesignsView = Backbone.CompositeView.extend({
  template: JST['options/card_designs'],
  className: "col-md-5",

  initialize: function (options) {
    window.CARD_VIEW = this;
    this.collection.each(this.addDesign.bind(this));
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addDesign);
    this.renderCount = 0;
    this.loadWait = options.directLoad ? 0 : TRANS_LENGTH;
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    console.log("Rendering!");
    if (this.renderCount > 0) {
      window.setTimeout(this.makeItSlick.bind(this), this.loadWait);
    }
    this.renderCount++;
    return this;
  },

  addDesign: function (design) {
    this.addSubview(".slider-for", new ABetterPresent.Views.DesignItem({
      model: design
    }));
    this.addSubview(".slider-nav", new ABetterPresent.Views.DesignItem({
      model: design
    }));
  },

  makeItSlick: function () {
    this.$('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slider-nav'
    });
    this.$('.slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     centerMode: true,
     focusOnSelect: true
    });
  },
});
