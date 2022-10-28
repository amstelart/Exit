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

    // $('#mobile-nav').hcOffcanvasNav({
    //   customToggle: $('.m-menu-toggle'),
    //   navTitle: 'Меню',
    //   insertClose: false,
    //   position: 'top'
    // });

    // $('#mobile-catalog').hcOffcanvasNav({
    //   customToggle: $('.m-catalog-toggle'),
    //   navTitle: 'Каталог оборудования',
    //   insertClose: false,
    //   position: 'top'
    // });
  
    var mobileNav = new hcOffcanvasNav('#mobile-nav', {
      customToggle: $('.m-menu-toggle'),
      navTitle: 'Меню',
      insertClose: false,
      position: 'top'
    });

    var catalogNav = new hcOffcanvasNav('#mobile-catalog', {
      customToggle: $('.m-catalog-toggle'),
      navTitle: 'Меню',
      insertClose: false,
      position: 'top'
    });
    
    mobileNav.on("open", function() {
      catalogNav.close();
      $('body').addClass('hc-nav-open');
      $('.page').addClass('hc-nav-yscroll');
    });
    
    catalogNav.on("open", function() {
      mobileNav.close();
      $('body').addClass('hc-nav-open');
      $('.page').addClass('hc-nav-yscroll');
    });

    $({blurRadius: 5}).animate({blurRadius: 0}, {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $(".animatenumber").css({
          "-webkit-filter": "blur("+this.blurRadius+"px)",
          "filter": "blur("+this.blurRadius+"px)"
        });
      }
    });
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    $(".animatenumber").each(function() {
      var tcount = $(this).data("count");
      $(this).animateNumber({ number: tcount,
        easing: 'easeInQuad',
        "font-size": "24px",
        numberStep: comma_separator_number_step},
        1000);
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
