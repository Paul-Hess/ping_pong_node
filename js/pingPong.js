// returns ping and/or pong for 3 5 15 factorials.
	exports.pingPong = function(num) {
	var pingArray = [];	
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