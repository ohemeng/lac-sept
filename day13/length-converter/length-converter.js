$("#btn").click(function(){
	var length = $("#length").val();
	var result = length * 2.54;
	$("#result").html("The length in centimeters is: " + result + " cm.");
})