$(".container").css("display", "none");

$("#btn").click(function(){
	var first = $("#first").val();
	var second = $("#second").val();
	var answer = parseInt(first) + parseInt(second);
	$("#answer").html(answer);
})

$("html").click(function(){
	$(".container").slideDown(1000);
})