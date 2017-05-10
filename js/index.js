$(document).ready(function() {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('#avator1').on('click', function(event) {
		event.preventDefault();
		$('#avator1').addClass('animated rubberBand').one(animationEnd, function(event) {
			$(this).removeClass('animated rubberBand')
		});
	});

	$('#avator2').on('click', function(event) {
		event.preventDefault();
		$('#avator2').addClass('animated wobble').one(animationEnd, function(event) {
			$(this).removeClass('animated wobble')
		});
	});

	$('#avator3').on('click', function(event) {
		event.preventDefault();
		$('#avator3').addClass('animated jello').one(animationEnd, function(event) {
			$(this).removeClass('animated jello')
		});
	});

});