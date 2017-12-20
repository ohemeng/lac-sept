


var btn = document.getElementById('btn');
btn.onclick = function(){
	var age = document.getElementById('age').value;
	var cups = document.getElementById('cups').value;
	var retire = document.getElementById('retire').value;
	var total = (parseInt(retire) - parseInt(age)) * parseInt(cups) * 365;
	console.log(total);
	document.getElementById('total').innerHTML = total;
	document.getElementById('total').style.color = "red";
}