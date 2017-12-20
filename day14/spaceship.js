$(document).keydown(function(e){
	if(e.which == 39){
		$("#spaceship").css("left", "+=40px");
	}

	if(e.which == 40){
		$("#spaceship").css("top", "+=40px");
	}

	if(e.which == 37){
		$("#spaceship").css("left", "-=40px");
	}
	if(e.which == 38){
		$("#spaceship").css("top", "-=40px");
	}

	if(e.which == 82){
		$("#spaceship").css("transform", "rotate(45deg)");
	}
})