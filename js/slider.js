$(() => {
  $(".first").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1500,
    dots: false,
    prevArrow: '<div class="prev" id="prev" data-arrow="1"></div>',
    nextArrow: '<div class="next" id="next" data-arrow="1"></div>'
  });

  $(".second").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1500,
    dots: false,
    prevArrow: '<div class="prev" id="prev" data-arrow="2"></div>',
    nextArrow: '<div class="next" id="next" data-arrow="2"></div>'
  });

  $(".third").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1500,
    dots: false,
    prevArrow: '<div class="prev" id="prev" data-arrow="3"></div>',
    nextArrow: '<div class="next" id="next" data-arrow="3"></div>'
  });
});
