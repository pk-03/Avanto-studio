//LOADER
$(window).on('load', function() {
  "use strict";
  $('.loader').fadeOut(800);
});


jQuery(function($) {
  "use strict";

  // +++++ Back to Top
  $("body").append('<a href="#" class="back-to"><i class="icon-arrow-up2"></i></a>');
  var amountScrolled = 700;
  var backBtn = $("a.back-to");
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > amountScrolled) {
      backBtn.fadeIn("slow");
    } else {
      backBtn.fadeOut("slow");
    }
  });
  backBtn.on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
    return false;
  });



  // +++++ Pricings
  $('.pricing_btn').on('click', function() {
    if ($('.pricing_btn').hasClass('active')) {
      var $el = $('.' + this.id).fadeIn(300);
      $('.pricings').not($el).fadeOut(300);
    }
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
	 return false;
  });


  // +++++ sidebar
  
  // Push Menus 
	var $menuLeft = $(".pushmenu-left");
	var $menuRight = $(".pushmenu-right");
	var $toggleleft = $("#menu_bars.left");
	var $toggleright = $("#menu_bars.right");
	$toggleleft.on("click", function() {
	  $(this).toggleClass("active");
	  $(".pushmenu-push").toggleClass("pushmenu-push-toright");
		$menuLeft.toggleClass("pushmenu-open");
		return false;
	 });
	 $toggleright.on("click", function() {
		 $(this).toggleClass("active");
		 $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
		  $menuRight.toggleClass("pushmenu-open");
		  return false;
	 });
	 
	 
  var trigger = $('.hamburger'),
  overlay = $('.overlay_full'),
  isClosed = false;
  trigger.on('click', function() {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').on('click', function() {
    $('#wrapper').toggleClass('toggled');
  });

  var side_drop = $('.push_nav .dropdown');
  side_drop.on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  side_drop.on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });


  // +++++  SKILS
  $('.skills li').each(function() {
    $(this).appear(function() {
      $(this).animate({
        opacity: 1,
        left: "0px"
      }, 800);
      var b = jQuery(this).find(".progress-bar").attr("data-width");
      $(this).find(".progress-bar").animate({
        width: b + "%"
      }, 1300, "linear");
    });
  });



  // ++++++ Owl Carousel

  //Single Slide
  $("#people_slider, #feedback_slider").owlCarousel({
    autoPlay: 4000,
    pagination: true,
    stopOnHover: true,
    navigation: false,
    transitionStyle: "fade",
    singleItem: true
  });
  
   //Testimonial
  $(".testimonial").owlCarousel({
    autoPlay: 4000,
    pagination: false,
    stopOnHover: true,
    navigation: false,
    transitionStyle: "fade",
    singleItem: true
  });
  
  


  //People Saying
  $("#people_slider").owlCarousel({
    autoPlay: true,
    navigation: false,
    stopOnHover: true,
    slideSpeed: 300,
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    paginationSpeed: true,
  });



// --------- Revolution Slider
   var revapi4 = $("#revo_main").show().revolution({
     sliderType: "standard",
     sliderLayout: "fullwidth",
     scrollbarDrag: "true",
     dottedOverlay: "none",
     delay: 9000,
     navigation: {
		 //mouseScrollNavigation:"off",
		 //keyboardNavigation:"off",
       bullets: {
         style: "",
         enable: true,
         container: "slider",
         rtl: false,
         hide_onmobile: true,
         hide_onleave: false,

         hide_under: 0,
         hide_over: 9999,
         tmp: '',
         direction: "vertical",
         space: 3,
         h_align: "right",
         v_align: "center",
         h_offset:70,
         v_offset: 20
       },
       touch: {
         touchenabled: "on",
         swipe_threshold: 75,
         swipe_min_touches: 1,
         swipe_direction: "horizontal",
         drag_block_vertical: false
       }
     },

     viewPort: {
       enable: true,
       outof: "pause",
       visible_area: "80%"
     },
     responsiveLevels:[4096,1024,778,480],
     gridwidth: [1170, 960, 750, 480],
     gridheight: [734, 700, 500, 450],
     lazyType: "none",
     parallax: {
       type: "mouse",
       origo: "slidercenter",
       speed: 9000,
       levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
     },
     gridwidth: 1170,
     gridheight: 734,
     shadow: 0,
     spinner: "off",
     stopLoop: "off",
     stopAfterLoops: -1,
     stopAtSlide: -1,
     shuffle: "off",
     autoHeight: "off",
     hideThumbsOnMobile: "off",
     hideSliderAtLimit: 0,
     hideCaptionAtLimit: 0,
     hideAllCaptionAtLilmit: 0,
     debugMode: false,
     fallbacks: {
       simplifyAll: "off",
       nextSlideOnWindowFocus: "off",
       disableFocusListener: false,
     }
   });

   // +++++ home2                                                                  
   var revap = $("#revo_slider").show().revolution({
     sliderType: "standard",
     sliderLayout: "fullwidth",
     scrollbarDrag: "true",
     dottedOverlay: "none",
     delay: 9000,
     navigation: {
		 //mouseScrollNavigation:"off",
		 //keyboardNavigation:"off",
       arrows: {
         enable: true,
         hide_onmobile: true,                  
       },
       touch: {
         touchenabled: "on",
         swipe_threshold: 75,
         swipe_min_touches: 1,
         swipe_direction: "horizontal",
         drag_block_vertical: false
       }
     },

     viewPort: {
       enable: true,
       outof: "pause",
       visible_area: "80%"
     },
     responsiveLevels: [1170, 992, 767, 480],
     gridwidth: [1170, 992, 767, 480],
     gridheight: [600, 600, 500, 400],
     lazyType: "none",
     parallax: {
					  type:"mouse",
					  origo:"slidercenter",
					  speed:7000,
					  levels:[2,3,4,5,6,7,12,16,10,50],
					  disable_onmobile:"on"
	 },
     gridwidth: 1170,
     gridheight: 695,
     shadow: 0,
     spinner: "off",
     stopLoop: "off",
     stopAfterLoops: -1,
     stopAtSlide: -1,
     shuffle: "off",
     autoHeight: "off",
     hideThumbsOnMobile: "off",
     hideSliderAtLimit: 0,
     hideCaptionAtLimit: 0,
     hideAllCaptionAtLilmit: 0,
     debugMode: false,
     fallbacks: {
       simplifyAll: "off",
       nextSlideOnWindowFocus: "off",
       disableFocusListener: false,
     }
   });



  // // +++++  Parallax Backgrounds
  $('.parallax').parallax("50%", 0.3);
  $('.page_header').parallax("50%", -0.1);
  $('.news_head').parallax("50%", -0.3);




  // +++++  CubeFolio
  // gallery
  $('#portfolio-top').cubeportfolio({
    filters: '#js-filters-awesome-work',
    loadMore: '#js-loadMore',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    defaultFilter: '*',
    animationType: 'scaleSides',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    mediaQueries: [{
      width: 1500,
      cols: 2
    }, {
      width: 1100,
      cols: 2
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],
    caption: 'zoom',
    displayType: 'fadeIn',
    displayTypeSpeed: 400,
  });

  //No Space Grid
  $('#nospace-gallery').cubeportfolio({
    filters: '#nospace-filters',
    layoutMode: 'mosaic',
    defaultFilter: '*',
    animationType: 'slideDelay',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    mediaQueries: [{
      width: 1500,
      cols: 5
    }, {
      width: 1100,
      cols: 4
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],

  });

   ///*For Bout galley*/
  $('#about-gallery').cubeportfolio({
    layoutMode: 'grid',
    mediaQueries: [{
      width: 1500,
      cols: 3
    }, {
      width: 1100,
      cols: 3
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],

    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
  });

   
	
	// +++++ WOW Transitions
 if ($(window).width() > 767) {
     new WOW().init();
  }


   //Contact Map
  if ($('#map').length){
    var map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333,
      scrollwheel: false
    });
    map.drawOverlay({
      lat: map.getCenter().lat(),
      lng: map.getCenter().lng(),
      layer: 'overlayLayer',
      content: '<div class="overlay_map"><img src="images/pin.png"></div>',
      verticalAlign: 'top',
      horizontalAlign: 'center'
    });
  }


});