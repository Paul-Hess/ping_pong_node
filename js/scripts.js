// holds returned numbers and strings for passing to UI.
var pingArray = [];
// assigns index for UI iterations through loop of returns.
var count = 0;

// handles input number, verifies is a number and calls for return of ouput.
var pingPong = function(num) {
	if (isNumber(num) && num > 0) {
		return numberReturn(num);
	} else {
		return "please enter a positive numeral";
	}
}

// returns ping and/or pong for 3 5 15 factorials.
var numberReturn = function(num) {
	pingArray = [];	
	for (var i = 1; i <= num; i++){
		if (i%15 === 0) {
			pingArray.push("pingpong");
		} else if (i%5 === 0) {
			pingArray.push("pong");
		} else if (i%3 === 0) {
			pingArray.push("ping");
		} else {
			pingArray.push(i);
		} 
	}
	return pingArray;
}

// aids in filtering unwanted input.
function isNumber(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}

$(function() {
	function addListItems() {
		$('ul').append(document.createElement('li'));
		$('li').last().append(pingArray[count]);
		count++;	
	}

	$('form#number-input').submit(function(event) {
		var numberInput = $('input#toPing').val();
		pingPong(numberInput);
		pingArray.forEach(addListItems)
		event.preventDefault();	
	});
});