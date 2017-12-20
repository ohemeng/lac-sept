var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');

add.onclick = function(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var answer = parseInt(num1) + parseInt(num2);
	document.getElementById('answer').value = answer;
}

subtract.onclick = function(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var answer = parseInt(num1) - parseInt(num2);
	document.getElementById('answer').value = answer;
}

multiply.onclick = function(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var answer = parseInt(num1) * parseInt(num2);
	document.getElementById('answer').value = answer;
}

divide.onclick = function(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var answer = parseInt(num1) / parseInt(num2);
	document.getElementById('answer').value = answer;
}