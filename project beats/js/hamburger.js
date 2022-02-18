$(document).ready(function () {
  $("#show").click(function () {
    $(".fullscreen-menu").show();
  });
  $(".fullscreen-menu__close").click(function () {
    $(".fullscreen-menu").hide();
  });
});