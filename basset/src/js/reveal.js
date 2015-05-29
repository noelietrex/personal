$(document).ready(function(){
	resizeDiv();
});

$(window).resize(function() {
	if($(window).width() > mediumBreakPoint) {
		resizeDiv();
	} else {

	}
});
function resizeDiv() {
	reveal = $('.component-reveal-footer').outerHeight();
	console.log(reveal);
	$('.reveal-wrapper').css({'margin-bottom': reveal});
	$('.component-reveal-footer').css({'height': reveal});
}
