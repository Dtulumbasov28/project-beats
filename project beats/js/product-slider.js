const slider = $('.products').bxSlider({
  pager: false,
  controls : false,
});

$('.products-slider__arrow--icon--prev').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$('.products-slider__arrow--icon--next').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});