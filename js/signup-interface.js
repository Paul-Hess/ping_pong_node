$(function() {
	$('.signup').submit(function(event) {
		event.preventDefault();
		var email = $('#signup-email').val();
		$('.signup').hide();
		$('.output').prepend('<p>Thank you ' + email + '</p>');
	});
});