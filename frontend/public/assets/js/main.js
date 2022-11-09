(function($) { "use strict";

  $( "#slider-range-min" ).slider({
    range: "min",
    value: 300,
    min: 3,
    max: 700,
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.value );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );

  // Magnific Popup video
  $('.video-open').magnificPopup({
    type: 'iframe'
  });

 /*
    **** Pricing Slider JS ****
    */ 
    $("#slider-range").slider({
      range: true,
      min: 130,
      max: 500,
      values: [130, 250],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));

  // sticky navbar============================
  window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
  });

   // mobile-search-area
  $('.search-btn').on("click", function(){
    $('.mobile-search').addClass('slide');
  });
  $('.search-cross-btn').on("click", function(){
    $('.mobile-search').removeClass('slide');
  });

  // show mobile-menu========
  $('.mobile-menu-btn').on("click", function(){
    $('.mobile-sidebar').addClass('slide-mobile-sidebar');
  });

  // mobile-menu-close==========
  $('.mobile-menu-close').on("click", function(){
    $('.mobile-sidebar').removeClass('slide-mobile-sidebar');
  });

  // mobile submenu slide-down
  $('.moblie-link').on("click", function(){
    $(this).next('.mob-submenu').slideToggle();
  });

  // drop-down icon rotate============
  $('.moblie-link').on("click", function(){
    $(this).find('.dropd-icon').toggleClass('icon-rotate');
  });

  // cart-sidebar==============
  $('.cart-btn').on("click", function(){
    $('.main-cart-sidebar').addClass('cart-slide');
  });

  // cart-sidebar-close==========
  $('.cart-close-icon').on("click", function(){
    $('.main-cart-sidebar').removeClass('cart-slide');
  });

  // mobile-sidebar button home-2=========
  $('.mobile-menu-btn').on("click", function(){
    $('.mobile-menu-btn').toggleClass('bar-cross');
  });
  $('.mobile-menu-btn').on("click", function(){
    $('.mobile-menu-btn').toggleClass('bar-cross');
  });

  // Home-2 banner-slider=============
  $('.banner-slider2').slick({
    centerMode: false,
    slidesToShow: 1,
    arrows: true,
    prevArrow:'<i class="left-arrow las la-arrow-left"></i>',
    nextArrow:'<i class="right-arrow las la-arrow-right"></i>',
    dots: false,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    fade: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // home01 category-slider============
  $('.category-slick').slick({
    centerMode: false,
    slidesToShow: 6,
    arrows: false,
    prevArrow:'<i class="prev las la-arrow-left"></i>',
    nextArrow:'<i class="next las la-arrow-right"></i>',
    dots: false,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 2199,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1399,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          dots: false,
          centerMode: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });



  // RANGE-SLIDER==========
  (function() {
    var parent = document.querySelector("#rangeSlider");
    if(!parent) return;

    var
    range = parent.querySelector("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");
    range.oninput = function() {
      var slide = parseFloat(range.value);
      numberS[0].value = slide;
    }

    numberS.forEach(function(el) {
      el.oninput = function() {
        var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value);

        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }

        rangeS[0].value = number1;
        rangeS[1].value = number2;

      }
    });

  })();


  // home01 best-deal-slider===========
  $('.best-deal-slider').slick({
    centerMode: false,
    slidesToShow: 4,
    rows: 2,
    arrows: true,
    prevArrow:'<i class="prev las la-arrow-left"></i>',
    nextArrow:'<i class="next las la-arrow-right"></i>',
    dots: false,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 2199,
        settings: {
          arrows: true,
          dots: false,
          rows: 2,
          centerMode: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1399,
        settings: {
          arrows: true,
          dots: false,
          rows: 2,
          centerMode: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          dots: false,
          rows: 2,
          centerMode: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          rows: 1,
          dots: false,
          centerMode: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          rows: 1,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: true,
          rows: 1,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          rows: 1,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });
 


  //special-prod-slider===========
  $('.special-prod-slider').slick({
    centerMode: false,
    slidesToShow: 4,
    rows: 2,
    arrows: true,
    prevArrow:'<i class="prev las la-arrow-left"></i>',
    nextArrow:'<i class="next las la-arrow-right"></i>',
    dots: false,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 2199,
        settings: {
          arrows: true,
          dots: false,
          rows: 2,
          centerMode: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1399,
        settings: {
          arrows: true,
          dots: false,
          rows: 2,
          centerMode: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          dots: false,
          rows: 2,
          centerMode: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          rows: 1,
          dots: false,
          centerMode: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          rows: 1,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: true,
          rows: 1,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          rows: 1,
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // niceSelect
  $('select').niceSelect();

  // category-sidebar-area=============
  $('.sidebar-btn').on("click", function(){
    $('.category-sidebar-wrapper').addClass('slide-sidebar');
  });

  $('.category-close').on("click", function(){
    $('.category-sidebar-wrapper').removeClass('slide-sidebar');
  });


  // Cart Quantity 
  jQuery('.quantity').each(function () {
    
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.on('click',function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on('click',function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });
  
  // Odometer Counter
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
 

    
  // Home-2 feature-slider=============
  $('.feature-slider-active').slick({
    centerMode: false,
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    prevArrow:'<i class="prev fas fa-angle-left"></i>',
    nextArrow:'<i class="next fas fa-angle-right"></i>',
    loop: true,
    infinite:true,
    dots: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          dots: false,
          centerMode: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: false,
          centerMode: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

}(jQuery));