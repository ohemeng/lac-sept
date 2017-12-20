	$("#btn").click(function(){
		var username = $('.username').val();
		console.log(username);
		Cookies.set('userPie1', username);
		var user = Cookies.get('userPie1');
		$('#user').html('Hello, '+ user);
	})


var user = Cookies.get('userPie1');
$('#user').html('Hello, '+ user);