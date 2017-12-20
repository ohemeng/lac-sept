

$("#btn").click(function(){
	var username = $(".username").val();
	localStorage.setItem('username', username);
	var user = localStorage.getItem('username');
	$("#user").html("Welcome, " + user);
	$("#user").css("color", "green");
})


$("#btn2").click(function(){
	localStorage.setItem('username', ' ');
	$("#user").html("You have logged out");
	$("#user").css("color", "red");
})

$(document).ready(function(){
	var user = localStorage.getItem('username');
	if(user == " "){
		$("#user").html("You have logged out");
		$("#user").css("color", "red");
	}else{
	$("#user").css("color", "green");
	$("#user").html("Welcome, "+ user);
	}
})