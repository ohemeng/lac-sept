

$('#submit').click(function(){
	var firstname = $("#firstname").val();
 	var lastname = $("#lastname").val();
 	var address = $("#address").val();
 	var bagel = $("#bagel").val();
 	var spread = $("#spread").val();
	var milk = $("#milk").val();


 	$("#userInfo").html(firstname + " " + lastname + "<br>" 
 		+ address + "<br>" + "<br>" 
 		+ "This is what you selected:" + "<br>" 
 		+ "Bagel: " + bagel + "<br>"
 		+ "Spread: "  + spread + "<br>"
 		+ "Milk: " + milk + "cup(s) <br>");
  
  $('.modal-wrapper').fadeIn();


var bagelCarbs = {"one": 20, "two": 40, "three": 60};
var spreadCarbs = {"butter": 3, "jam": 5, "cream cheese": 4};
var milkCarbs = {"1": 10, "2": 20, "3": 30};

var totalCarbs = bagelCarbs[bagel] + spreadCarbs[spread]+ milkCarbs[milk];
console.log(totalCarbs);
$("#total").html("Total Carbs: " + totalCarbs + "g");


var bagelProtein = {"one": 10, "two": 20, "three": 30};
var spreadProtein = {"butter": 10, "jam": 15, "cream cheese": 24};
var milkProtein = {"1": 8, "2": 16, "3": 24};

var totalProtein = bagelProtein[bagel] + spreadProtein[spread]+ milkProtein[milk];
console.log(totalProtein);
$("#total").append("<br> Total Protein: " + totalProtein + "g");
 })
// if(bagel == "1 bagel"){
// 	bagelCarbs = 20; 
// }
// if(spread == "2 bagels"){
// 	ba
// }

 $('.js-modal-close').click(function(){
 	$('.modal-wrapper').fadeOut();
 })

