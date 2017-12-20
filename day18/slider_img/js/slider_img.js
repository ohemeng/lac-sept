
var index = 0;
carousel();

function carousel() {
	$("img").css("display", "none"); 

  index++;
  if (index > $("img").length) {
  	index = 1
  }    
  $("img").eq(index-1).css("display", "block"); 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}