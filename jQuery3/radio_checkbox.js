$("#btn").click(function(){
	var total = 0;
	$("#items").html("");
	if($("#iphone").is(":checked")){
		total = total + 699;
		$("#items").append("iPhone - $699 <br>");
	}
	if($("#android").is(":checked")){
		total = total + 559;
		$("#items").append("Android - $559 <br>");
	}
	if($("#laptop").is(":checked")){
		total = total + 1000;
		$("#items").append("Laptop - $1000 <br>");
	}
	if($("#charger").is(":checked")){
		total = total + 49;
		$("#items").append("Charger - $49 <br>");
	}
	$("#total").html("The total cost: $"+ total);
})