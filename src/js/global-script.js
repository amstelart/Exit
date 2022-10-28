// Если на проекте jQuery
$( document ).ready(function() {
  // code

    $(".main-slider").owlCarousel({
        items: 1,
        nav: true,
        margin: 10,
        dots: true,
        loop: true,
        center: true
    });

    var shrinkHeader = 130;
    var head = $('.header-box');
    var heightHeader = head.height();
    $(window).scroll(function() {
      var scroll = $(this).scrollTop();
      if ( scroll >= shrinkHeader ) {
          $('body').css('paddingTop',heightHeader);
          head.addClass('shrink');
        }
        else {
            $('body').css('paddingTop',0);
            head.removeClass('shrink');
        }
    });

    $('#mobile-nav').hcOffcanvasNav({
      customToggle: $('.m-menu-toggle'),
      navTitle: 'Меню',
      position: 'top'
    });
    $('#mobile-catalog').hcOffcanvasNav({
      customToggle: $('.m-catalog-toggle'),
      navTitle: 'Каталог оборудования',
      position: 'top'
    });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
