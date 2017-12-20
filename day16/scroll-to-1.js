
$(".home").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-home").offset().top
    }, 1000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-about-us").offset().top
    }, 1000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-contact-us").offset().top
    }, 1000);
});

