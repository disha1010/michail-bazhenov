$(document).ready(function() {
  $('.search-form__toggle').on('click', function() {
    $('.header-wrapper').addClass('search-active');
  });
  $('.search-form__close').on('click', function() {
    $('.header-wrapper').removeClass('search-active');
  });
  $(".sub-menu-toggle").on('click', function() {
    $(this).toggleClass('arrow__rotate');
    $(this).parent('.dropdown').toggleClass('active');
  });
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    $('.message').show();
  });
  $('.dropdown > a').click(function(){
    location.href = this.href;
  });
});
