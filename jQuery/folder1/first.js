// var btn1 = document.getElementById("btn1");
//  	btn1.onclick = function(){
//  		alert("Hello there!")
//  	}

// $("#btn1").click(function(){
// 	alert("Hello there, jQuery");
// })
 
document.cookie = "hello=test";

$("body").show(function(){
	$("#btn1,#btn2,#btn3,#btn4,#btn5,#btn6,#btn7,#btn8,#btn9").slideUp(20);
})
$("#btn1").click(function(){
	$("body").css("background-color", "red");
})

$("#btn2").click(function(){
	$("body").css("background-color", "blue")
})

$("#btn3").click(function(){
	$("#lorem").hide();
})

$("#btn4").click(function(){
	$("#lorem").show();
})


$("#btn5").click(function(){
	$("nav").slideUp(1000);
})


$("#btn6").click(function(){
	$("nav").slideDown(1000);
})

$("#btn7").click(function(){
	$("#lorem").slideUp(1000);
})


$("#btn8").click(function(){
	$("#lorem").slideDown(1000);
})

$("#btn9").click(function(){
$("#box").animate( {
  opacity: "0.25",
  width: "70%",
	height: "30%",
	left: "100px"
} , 2000 );
})

$("#lorem").show(function(){
	$("#box").animate({
		left: "600px",
	}, 8000);
	$("#box").slideUp(1000);
})

$("nav").click(function(){
	$("button").slideDown(2000);
	$("button").css("background-color", "orange");
})
