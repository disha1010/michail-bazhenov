$(document).ready(function () {
  $(".search-form__toggle").on("click", function () {
    $(".header-wrapper").addClass("search-active");
  });
  $(".search-form__close").on("click", function () {
    $(".header-wrapper").removeClass("search-active");
  })
  // $(".sub-menu-toggle").on("click", function () {
  //   setTimeout(function () {
  //     $(".menu-item.dropdown").addClass("open");
  //     $(".navbar-link-item").attr("aria-expanded", "true");
  //   })
  // })
});