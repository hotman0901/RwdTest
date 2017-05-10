$(document).ready(function() {
	$('#mail').focus(function(event) {
		/* Act on the event */
		$(this).removeClass('mail');
	});
	$('#mail').blur(function(event) {
		/* Act on the event */
		var mail = $('#mail').val().trim();
		// 沒有輸入東西再把屬性加回去
		if (mail.length < 1) {
			$(this).addClass('mail');
			$(this).val('');
		} else {
			$('#mail').val(mail);
		}
	});


	$('#password').focus(function(event) {
		/* Act on the event */
		$(this).removeClass('password');
	});
	$('#password').blur(function(event) {
		/* Act on the event */
		var password = $('#password').val().trim();
		if (password.length < 1) {
			// 沒有輸入東西再把屬性加回去
			$(this).addClass('password');
			$(this).val('');
		}
	});
});