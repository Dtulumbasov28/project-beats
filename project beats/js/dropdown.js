$(document).ready(function () {
  $(".product__ingredients").hover(function () {
    $('.product__dropdown').show();
  }, 
  function () {
    $('.product__dropdown').hide();
  });
});