// holds returned numbers and strings for passing to UI.
var pingArray = [];

// handles input number, verifies is a number and calls for return of ouput.
var pingPong = function(num) {
	if (num > 0 && num < 501) {
		return numberReturn(num);
	} else {
		alert("please enter a positive numeral"); 	
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

$(function() {
	//assigns index for iterations through loop of returns.
	var count = 0;

	//helper function to forEach to add list items to ul.
	function addListItems() {
		$('ul.output').append(document.createElement('li'));
		$('li').last().append(pingArray[count]);
		count++;	
	}

	$('form#number-input').on('submit', function(event) {
		var numberInput = $('input#toPing').val();
		pingPong(numberInput);
		pingArray.forEach(addListItems)
		$('html, body').animate({
                    scrollTop: $("li").last().offset().top
                		}, 3000);
		$('div.hide-button').show();
		event.preventDefault();	
	});

	$('.reset').click(function() {
		location.href = "index.html"
		$(this).scrollTop(0);
	});

});