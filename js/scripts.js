var pingPong = function(num) {
	if (isNumber(num)) {
		num;
	} else {
		return "please enter a numeral";
	}

	if (num%15 === 0) {
		return "pingpong";
	} else {
		return num;
	}

}

// aids in filtering unwanted input.
function isNumber(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}