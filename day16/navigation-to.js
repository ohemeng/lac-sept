$(document).ready(function(){

$("#home").click(function(event) {
	 event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#page-home").offset().top
    }, 2000);
});

$("#about").click(function(event) {
	 event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#page-about-us").offset().top
    }, 2000);
});

$("#contact").click(function(event) {
	 event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#page-contact-us").offset().top
    }, 2000);
});


});