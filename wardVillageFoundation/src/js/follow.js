$(function(){

	$(this).keyup(function(event) {
		if (event.which === 27) {
			disablePopup();
		}
	});

	$('.blur-overlay').click(function() {
		disablePopup();
		return false;
	});
});

function disablePopup() {
	$('.modal-container').fadeOut('normal');
	$('.blur-overlay').fadeOut('normal');
}
