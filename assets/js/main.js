$(document).ready(function () {
  "use strict";

  // var startItem = $('.slider-item').length - 1;

  // AOS.init();

  if ($(".header-slider").length) {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      items: 1,
      smartSpeed: 1000,
      autoplay: true,
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
