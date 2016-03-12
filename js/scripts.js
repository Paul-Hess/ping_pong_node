

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