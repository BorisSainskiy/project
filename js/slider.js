$(() => {
  $(".slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>'
  });
});
