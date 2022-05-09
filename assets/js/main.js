(function ($) {

   var swiper = new Swiper(".home-service--wrapper", {
        cssMode: true,
        loopedSlides: 5,
        loop: false,
        slidesPerView: "auto",
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });

    // Testmorials
    var testimonialsSwiper = new Swiper(".testimonials-swiper", {
        loop: true,
        speed: 3000,
        
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

     
     
    //   Sticky Menu

    var new_scroll_position = 0;
    var last_scroll_position;
    var header = document.getElementById("siteHeader");
    
    window.addEventListener('scroll', function(e) {
      last_scroll_position = window.scrollY;
    
      // Scrolling down
      if (new_scroll_position < last_scroll_position && last_scroll_position > 20) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.remove("slideDown");
        header.classList.add("slideUp");
    
      // Scrolling up
      } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
      }
    
      new_scroll_position = last_scroll_position;
    });

    // CTA One Magnific Popup
    $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


    var a = 0;
    $(window).on('scroll', function () {

        var oTop = $('.about_count').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            /*alert('finished');*/
                        }
                    });
            });
            a = 1;
        }

    });

})(jQuery);
