$("#btn").click(function(){

	var name = $("#name").val();
	if(name == ""){
		name = "He/She";
	}

	var car = $("#car").val();

	if($("#silver").is(":checked")){
		var color = "silver";
	}
	if($("#white").is(":checked")){
		var color = "white";
	} else{
		var color = "black";
	}

	if($("#two").is(":checked")){
		var doors = "2";
	} else{
		var doors = "4";
	}
	if($("#gps").is(":checked")){
		var gps = "GPS.";
	} else{
		var gps = "no GPS.";
	}
	var description = name + " has selected a " + color + " " + car + " with " + doors + " doors and " + gps;
	$("#description").html(description);
})