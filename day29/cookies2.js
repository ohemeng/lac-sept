$("#btn").click(function(){
	var username = $(".username").val();


	localStorage.setItem('username', username);
	var user = localStorage.getItem('username');
	$("#user").html("Welcome, " + user);
})


$("#btn2").click(function(){
	localStorage.setItem('username', ' ');
	$("#user").html("You have logged out");
})

$(document).ready(function(){
	var user = localStorage.getItem('username');
	if(user == " "){
		$("#user").html("You have logged out");
	}else{
	$("#user").html("Welcome, "+ user);
	}
})