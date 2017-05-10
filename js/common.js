$(document).ready(function() {
	$('#hamburger').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('body').toggleClass('show-menu');
	});

	$('.gototp-img').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html body').animate({
			scrollTop: 0
		}, 600);

	});

});