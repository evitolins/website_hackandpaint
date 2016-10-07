function init() {

    var scrollListener = function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 80;
        if (distanceY > shrinkOn) {
            $("header").addClass("smaller");
            $("#mainLogo").addClass("smaller");

            $("#mainLogo").parent().addClass("col-md-4");
            $("#mainLogo").parent().removeClass("col-md-12");
            $("#mainLogo").parent().removeClass("centered");

            $(".mainMenuItems").removeClass("col-md-12");
            $(".mainMenuItems").addClass("col-md-8");
            $(".mainMenuItems").addClass("smaller");

            $(".interior-dropdown").addClass("smaller");
        } else {
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
}   
window.onload = init();