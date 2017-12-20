	$("#btn").click(function(){
		var username = $('.username').val();
		console.log(username);
		Cookies.set('userCookie1', username)
		var user = Cookies.get('userCookie1');
		$('#user').html('Welcome, '+ user);
	})


$("#btn2").click(function(){
	Cookies.set('userCookie1', ' ');
	$("#user").html("You have logged out");
	$(".username").val(" ");
})

$(document).ready(function(){
	var user = Cookies.get('userCookie1');
	if(user == " "){
		$("#user").html("You have logged out");
	}else{
	$("#user").html("Welcome, "+ user);
	}
	if(user == "John"){
		$("body").css("background", "lightblue");
	}
	if(user == "Jane"){
		$("body").css("background", "pink");
	}
})