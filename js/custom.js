	$(document).ready(function () {
		$(window).scroll(function () {
			//Back to top
			if ($(this).scrollTop() > 0) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}

			//Back top bottom
			if ($(window).scrollTop() + $(window).height() <= $(document).height() - 5) {
				$('#back-to-bottom').fadeIn();
			} else {
				$('#back-to-bottom').fadeOut();
			}
		});

		// scroll body to bottom on click
		$('#back-to-bottom').click(function () {
			$('#back-to-bottom').tooltip('hide');
			$('body,html').animate({
				scrollTop: $(document).height()
			}, 500);
			return false;
		});

		//$('#back-to-bottom').tooltip();

		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});

		//$('#back-to-top').tooltip();

	});
