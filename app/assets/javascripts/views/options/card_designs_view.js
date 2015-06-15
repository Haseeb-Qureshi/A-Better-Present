ABetterPresent.Views.CardDesignsView = Backbone.View.extend({
  template: JST['options/card_designs'],
  className: "col-md-5",
  
  render: function () {
    this.$el.html(this.template());
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
    return this;
  },
});
