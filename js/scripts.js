// handles input number, verifies is a number and calls for return of ouput.
var pingPong = function(num) {
	if (isNumber(num)) {
		return numberReturn(num);
	} else {
		return "please enter a numeral";
	}
}

// returns ping and/or pong for 3 5 15 factorials.
var numberReturn = function(num) {
	if (num%15 === 0) {
		return "pingpong";
	} else if (num%5 === 0) {
		return "pong";
	} else if (num%3 === 0) {
		return "ping";
	} else {
		return num;
	} 
}

// aids in filtering unwanted input.
function isNumber(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}