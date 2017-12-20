

$('#submit').click(function(){
	var firstname = $("#firstname").val();
 	var lastname = $("#lastname").val();
 	var address = $("#address").val();
 	var size = $("#size").val();
 	var color = $("#color").val();

 	$("#userInfo").html(firstname + " " + lastname + "<br>" 
 		+ address + "<br>" + "<br>" 
 		+ "Your order was:" + "<br>" 
 		+ "A " + size + ", " + color + " pants." + "<br>"
 		+ "Charge: $45");
  
  $('.modal-wrapper').fadeIn();
 })
  // invoke our function
 // modal();

 $('.js-modal-close').click(function(){
 	$('.modal-wrapper').fadeOut();
 })

