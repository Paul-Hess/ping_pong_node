var pingArray = [];

// handles input number, verifies is a number and calls for return of ouput.
var pingPong = function(num) {
	if (isNumber(num) && num > 0) {
		return numberReturn(num);
	} else {
		return "please enter a numeral";
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