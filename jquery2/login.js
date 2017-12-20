$("#signin").click(function(){
	if($("#email").val() == "jane@example.com" && $("#password").val() == "123456"){
		$("#error").css("color", "green");
		$("#error").html("Welcome, you are logged in.")
	} else{
		$("#error").css("color", "red");
		$("#error").html("Email or password is incorrect");
	}
})

$("#cancel").click(function(){
	location.reload();
})