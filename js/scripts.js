// returns ping and/or pong for 3 5 15 factorials.
var pingPong = function(num) {
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

$(function() {
	$('html, body').scrollTop(0);
	
	$('form#number-input').submit(function(event) {
		event.preventDefault();
		$('li.listItem').remove();	
		var numberInput = $('input#toPing').val();
		if (parseFloat(numberInput) > 0) {
			pingPong(numberInput).forEach(function(index) {
				$('ul.output').append('<li class="listItem"></li>');
				$('li').last().text(index);
			});
			$('div.hide-button').show();
			if ($('li.listItem').length > 25) {
				$('html, body').animate({
												scrollTop: $(".reset").last().offset().top
												}, 0);
			};	
		} else {
			$('ul.output').append('<li class="listItem"></li>');
			$('li').last().text("please enter a positive numeral");
		}
	});

	$('.reset').click(function() {
		location.href = "index.html"
		$(document).scrollTop(0);
	});

});