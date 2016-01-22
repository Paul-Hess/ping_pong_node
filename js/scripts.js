var pingPong = function(num) {
	if (isNumber(num)) {
		return num
	} else {
		return "please enter a numeral";
	}

}

function isNumber(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}