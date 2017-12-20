var currentSlide = 1;
var startCarousel = setInterval(startSliding, 1000);

function startSliding(){
	$("#carousel .slides").animate({'margin-left': '-=720px'}, 
		1000, function(){
		currentSlide++;
			if(currentSlide == $(".slide").length){
				currentSlide = 1;
				$(".slides").css('margin-left', 0);
			}
	});
}

$("#carousel").mouseover(function(){
	clearInterval(startCarousel);
})

$("#carousel").mouseleave(function(){
	startCarousel = setInterval(startSliding, 1000);
})