function init() {
    var headerShrinkState = false; 
    var scrollListener = function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            // shrinkOn = 80;
            shrinkOn = 110;
        if (distanceY > shrinkOn && !headerShrinkState) {
            headerShrinkState = true;
            $("header").addClass("smaller");
            $("#mainLogo").addClass("smaller");

            $("#mainLogo").parent().addClass("col-md-4");
            $("#mainLogo").parent().removeClass("col-md-12");
            $("#mainLogo").parent().removeClass("centered");

            $(".mainMenuItems").removeClass("col-md-12");
            $(".mainMenuItems").addClass("col-md-8");
            $(".mainMenuItems").addClass("smaller");

            $(".interior-dropdown").addClass("smaller");
        } else if (distanceY < shrinkOn && headerShrinkState) {
            headerShrinkState = false;
            $("header").removeClass("smaller");
            $("#mainLogo").removeClass("smaller");

            $("#mainLogo").parent().removeClass("col-md-4");
            $("#mainLogo").parent().addClass("col-md-12");
            $("#mainLogo").parent().addClass("centered");

            $(".mainMenuItems").removeClass("col-md-8");
            $(".mainMenuItems").addClass("col-md-12");
            $(".mainMenuItems").removeClass("smaller");

            $(".interior-dropdown").removeClass("smaller");
        }
    };

    // Bind Scroll event
    // TODO: should be throttled
    window.addEventListener('scroll', scrollListener);

    // Applied scroll state at page load (for page refreshes)
    scrollListener();

    // Smooth scroll
    $(function() {
      var offset = 80;
      var offset = 130;
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - offset
            }, 600, "swing");
            return false;
          }
        }
      });
    });

    Mousetrap.bind('up up down down left right left right b a enter', function() {
        alert('Shhh, you\'ve found a secret place.  How about some fun destroying our website?\n\nTry the arrow keys and spacebar... and HAVE FUN!\n\n(Refresh the page to reset.)\n\n');
        var KICKASSVERSION='2.0';
        var s = document.createElement('script');
        s.type='text/javascript';
        document.body.appendChild(s);
        s.src='//hi.kickassapp.com/kickass.js';
        void(0);
    });

    Mousetrap.bind('esc', function () {
        $(".fullScreenProfile").toggleClass('invisible', true);
        document.body.style.overflow = 'inherit';
    });


    //  Reveal Sunwalker Banner
    var reveal_banner = function () {
        $("header").removeClass('hide_sunwalker_banner');
    };
    setTimeout(reveal_banner, 2000)
    ;

}   
window.onload = init();