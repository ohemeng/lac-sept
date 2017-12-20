$("#btn").click(function(){
	var username = $(".username").val();
	localStorage.setItem('username', username);
	var user = localStorage.getItem('username');
	$("#user").html(user);
})

$(document).ready(function(){
	var user = localStorage.getItem('username');
	$("#user").html(user);
})