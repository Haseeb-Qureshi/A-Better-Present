ABetterPresent.Views.CardDesignsView = Backbone.CompositeView.extend({
  template: JST['options/card_designs'],
  className: "col-md-5",

  initialize: function () {
    window.CARD_VIEW = this;
    this.collection.each(this.addDesign.bind(this));
    this.listenTo(this.collection, "sync reset", this.render);
    this.listenTo(this.collection, "add", this.addDesign)
    this.designCount = 0;
  },

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    // // this.makeItSlick();
    return this;
  },

  addDesign: function (design) {
    this.addSubview(".carousel-inner", new ABetterPresent.Views.DesignItem({
      model: design,
      active: true,
    }));
    var $li = $("<li>").data("target", "#carousel").data("slide-to", this.designCount);
    this.designCount === 0 && $li.addClass("active");
    debugger
    this.$("ol.carousel-indicators").append($li);
    this.designCount++;
  },

  // makeItSlick: function () {
  //   window.setTimeout(function () {
  //     this.$('.slider-for').slick({
  //      lazyLoad: 'ondemand',
  //      slidesToShow: 1,
  //      slidesToScroll: 1,
  //      arrows: false,
  //      fade: true,
  //      asNavFor: '.slider-nav'
  //     });
  //     this.$('.slider-nav').slick({
  //      lazyLoad: 'ondemand',
  //      slidesToShow: 3,
  //      slidesToScroll: 1,
  //      asNavFor: '.slider-for',
  //      centerMode: true,
  //      focusOnSelect: true
  //     });
  //   }.bind(this), 500);
  // },
});
