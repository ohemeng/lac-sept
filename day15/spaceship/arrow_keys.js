/*
      Left = 37
      Up = 38
      Right = 39
      Down = 40
*/

$(document).keydown(function (e) {
  
    console.log(e.which); 

   if(e.which == 39){
      $("#box").css("left", "+=40px");
      // $("#box").animate({left: "+=40px"});
      $("#box").css("background", "url('spaceship.png')");
      $("#box").css("background-size", "contain");
      $("#box").css("background-repeat", "no-repeat");
   }
   var boxPosition = $("#box").position();
   var boxXPosition = boxPosition.left;
   var boxYPosition = boxPosition.top;
   console.log(boxXPosition);
   if(boxYPosition < 50){
      $("#result").css("display", "inline-block")
      $("#result").html("You win");
   }

   if(e.which == 37){
   	$("#box").css("left", "-=40px");
   }
   if(e.which == 40){
   	$("#box").css("top", "+=40px");
   }
   if(e.which === 38){
   	$("#box").css("top", "-=40px");
   }

})