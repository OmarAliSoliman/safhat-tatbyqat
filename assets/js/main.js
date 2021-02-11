$(document).ready(function () {
  "use strict";

  // var startItem = $('.slider-item').length - 1;

  // AOS.init();

  if ($(".header-slider").length) {
    var owl = $(".header-slider .owl-carousel");
    owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      smartSpeed: 100,
      autoplayTimeout: 2000,
      autoplay: true,
      animateOut: 'fadeOut',
      dots: true,
    });
  }

  if ($(".funcy-box-media").length) {
    $(".funcy-box-media").fancybox({
      transitionIn: "none",
      transitionOut: "none",
      titlePosition: "over",
      titleFormat: function (title, currentArray, currentIndex, currentOpts) {
        return (
          '<span id="fancybox-title-over">Image ' +
          (currentIndex + 1) +
          " / " +
          currentArray.length +
          (title.length ? " &nbsp; " + title : "") +
          "</span>"
        );
      },
    });
  }
});
