

$('#submit').click(function(){
	var firstname = $("#firstname").val();
 	var lastname = $("#lastname").val();
 	var address = $("#address").val();
 	$("#userInfo").html(firstname + " " + lastname +"<br>" + address);
  $('.modal-wrapper').fadeIn();
 })
  // invoke our function
 // modal();

 $('.js-modal-close').click(function(){
 	$('.modal-wrapper').fadeOut();
 })

