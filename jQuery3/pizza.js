console.log("jquery started");


$("#btn").click(function(){
var total = 0;
$("#receiptTopping").html("");

if($("#large").is(":checked")){
	total = total + 13.99;
	$("#receiptSize").html("Large $13.99<br>");
}
if($("#medium").is(":checked")){
	total = total + 11.99;
	$("#receiptSize").html("Medium $11.99<br>");
}

if($("#small").is(":checked")){
	total = total + 9.99;
	$("#receiptSize").html("Small $9.99<br>");
}

if($("#pepperoni").is(":checked")){
	total = total + 1.99;
	$("#receiptTopping").html("Pepperoni $1.99<br>");
} 
if($("#sausage").is(":checked")){
	total = total + 1.99;
	console.log("sausage selected");
	$("#receiptTopping").append("Sausage $1.99<br>");
} 
if($("#mushroom").is(":checked")){
	total = total + 1.99;
	$("#receiptTopping").append("Mushroom $1.99<br>");
} 

$("#receiptTotal").html("Total Cost:   "+total);
})