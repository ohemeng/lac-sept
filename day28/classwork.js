

$("#btn").click(function(){
	var username = $(".username").val();
	var password = $(".password").val();
	console.log(username);
	console.log(password);
	if (username != "" && username == password){
		Cookies.set('userCookie2', username, { expires: 1 });
		var user = Cookies.get('userCookie2');

		$(".content").html("<h3 class='text-center'>Yay!!! I'm logged in and class is in session.</h3>" + 
			"<br><a href='classwork-exercise.html'>Go to the cookie class</a>");

		$("#user").html("You are logged in, " + user);
		$("#user").css("color", "green");
	} else {
			$("#user").html("username and password don't match. Try again.");
			$("#user").css("color", "red");
	}

})


$("#btn2").click(function(){
	Cookies.set('userCookie2', ' ');
	$("#user").html("You have logged out");
	$("#user").css("color", "red");
})


var user = Cookies.get('userCookie2');
if (user != " "){
	$("#user").html(user+ ", welcome to class");
	}