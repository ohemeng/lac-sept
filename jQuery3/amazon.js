$("#btn").click(function(){
	var total = 0;
	$("#items").html("");

	if($("#fire7").is(":checked")){
		total = total + 49.99;
		$("#items").append("Kindle Fire 7 - $49.99<br>");
	}
	if($("#fire8").is(":checked")){
		total = total + 79.99;
		$("#items").append("Kindle Fire 8 - $79.99<br>");
	}
	if($("#fire10").is(":checked")){
		total = total + 149.99;
		$("#items").append("Kindle Fire 10 - $149.99<br>");
	}
	if($("#htmlBook").is(":checked")){
		total = total + 15.99;
		$("#items").append("HTML Design book - $15.99<br>");
	}
	if($("#cssBook").is(":checked")){
		total = total + 22.99;
		$("#items").append("CSS Cook book - $22.99<br>");
	}

	if($("#jqueryBook").is(":checked")){
		total = total + 25.99;
		$("#items").append("jQuery Is Fun book - $25.99<br>");
	}
	total = total.toFixed(2);
	$("#total").html("Total cost - $"+ total);
})