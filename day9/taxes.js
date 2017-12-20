var btn = document.getElementById('btn');
btn.onclick = function(){
	var salary = document.getElementById('salary').value;
	var federal = document.getElementById('federal').value;
	var state = document.getElementById('state').value;
	var afterTax = parseInt(salary) - ((parseInt(salary) * (parseInt(federal) + parseInt(state))/100));
	document.getElementById('afterTax').value = afterTax;
	document.getElementById('takeHome').innerHTML = afterTax;

}