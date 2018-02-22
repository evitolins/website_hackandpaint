// Bind Menu Buttons
$("#mainLogo").on('click', function () {window.location = "/";});
$(".menuToggle").on('click', function () {$('.fullScreenMenu').toggleClass("collapsed");});
$(".link_home").on('click', function () {window.location = "/";});

$(".dropdown-trigger-a").on('mouseover', function () {
    if (!submenu_displaying) display_submenu_ui(true);
    $('.interior-dropdown').children().hide();
    $('.dropdown-a').show();
});
$(".dropdown-trigger-b").on('mouseover',function () {
    if (!submenu_displaying) display_submenu_ui(true);
    $('.interior-dropdown').children().hide();
    $('.dropdown-b').show();
});
$("header").on('mouseleave',  function () {$('.dropdown-a').slideUp(100); });
$("header").on('mouseleave',  function () {$('.dropdown-b').slideUp(100); });


$(".avatar").on('click',  function () {
    $(".fullScreenProfile").toggleClass('invisible', false);
    var val = $(this).data('member');
    $(".profile_member").toggle(false);
    $(".profile_member[member="+val+"]").toggle(true);
    document.body.style.overflow = 'hidden';
});

$(".btn_closeProfile").on('click',  function () {
    $(".fullScreenProfile").toggleClass('invisible', true);
    document.body.style.overflow = 'inherit';
});

// Hide mobile menu on click
$('.fullScreenMenu a').on('click', function () {
    $('.fullScreenMenu').toggleClass("collapsed");
});


$TRAILER_STATE = false;
// Hide mobile menu on click
$('.toggleTrailer').on('click', function () {
    $TRAILER_STATE = !$TRAILER_STATE;
    $('.fullScreenTrailer').toggleClass("collapsed", !$TRAILER_STATE);

    $('#splash_container').toggleClass("filter_blowout", !$TRAILER_STATE);

    $("header").toggleClass("smaller", $TRAILER_STATE);
    $("#mainLogo").toggleClass("smaller", $TRAILER_STATE);

    $("#mainLogo").parent().toggleClass("col-md-4", $TRAILER_STATE);
    $("#mainLogo").parent().toggleClass("col-md-12", !$TRAILER_STATE);
    $("#mainLogo").parent().toggleClass("centered", !$TRAILER_STATE);

    $(".mainMenuItems").toggleClass("col-md-12", !$TRAILER_STATE);
    $(".mainMenuItems").toggleClass("col-md-8", $TRAILER_STATE);
    $(".mainMenuItems").toggleClass("smaller", $TRAILER_STATE);

    $("body").toggleClass("fixed", $TRAILER_STATE);
});


var submenu_displaying = false;
var display_submenu_ui = function (show) {
    if (show) $('.interior-dropdown').slideDown(100);
    else $('.interior-dropdown').slideUp(100);
};


$(".btn-contact").on('click', function () {window.location = "contact.html";});


// On load, animate tab entering
$('.social-side-widget').removeClass('collapsed');
