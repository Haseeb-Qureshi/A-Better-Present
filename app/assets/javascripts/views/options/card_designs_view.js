ABetterPresent.Views.CardDesignsView = Backbone.CompositeView.extend({
  template: JST['options/card_designs'],
  className: "col-md-5",

  initialize: function () {
    this.collection.each(this.addDesign.bind(this));
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addDesign)
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    this.makeItSlick();
    return this;
  },

  addDesign: function (design) {
    this.addSubview(".slider-nav", new ABetterPresent.Views.DesignItem({
      model: design
    }));
    this.addSubview(".slider-for", new ABetterPresent.Views.DesignItem({
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
     dots: true,
     centerMode: true,
     focusOnSelect: true
    });
  },
});
