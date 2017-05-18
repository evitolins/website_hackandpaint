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
    $('.fullScreenMenu').toggleClass("collapsed")
});


var submenu_displaying = false;
var display_submenu_ui = function (show) {
    if (show) $('.interior-dropdown').slideDown(100);
    else $('.interior-dropdown').slideUp(100);
};


$(".btn-contact").on('click', function () {window.location = "contact.html";});