var pingPong = function(num) {
	if (isNumber(num)) {
		num = num
	} else {
		return "please enter a numeral";
	}

}

function isNumber(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}