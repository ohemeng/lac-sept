$("#btn").click(function(){
	var total = 0;
	$("#items").html("");

	if($("#wholeWheat").is(":checked")){
		total = total + 3.99;
		$("#items").append("Whole Wheat bread - $3.99 <br>");
	}

	if($("#whiteBread").is(":checked")){
		total = total + 3.59;
		$("#items").append("White bread - $3.59 <br>");
	}

	if($("#potatoBread").is(":checked")){
		total = total + 2.99;
		$("#items").append("Potato bread - $2.99 <br>");
	}

	if($("#eggs").is(":checked")){
		total = total + 2.99;
		$("#items").append("Eggs - $2.99 <br>");
	}
	total = total.toFixed(2);

	$("#totalCost").html("The Total Cost is $"+ total);
})