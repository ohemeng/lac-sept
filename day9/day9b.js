var btn = document.getElementById("btn");

btn.onclick = function (){
	var guessNum = document.getElementById("guessNum").value;
	console.log(guessNum);
	var secretNum = Math.floor(Math.random() * 5 + 1);
	console.log(secretNum);	
	if (guessNum == secretNum){
		document.getElementById("guessedResult").innerHTML = "You got it correct";
	} else {
		document.getElementById("guessedResult").innerHTML = "No, incorrect";
	}
}

