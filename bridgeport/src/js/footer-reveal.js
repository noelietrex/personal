var sticky = $('.sticky-footer'),
		reveal_wrapper = $('.reveal-wrapper'),
		reveal_wrapper_height = reveal_wrapper.outerHeight(),
		sticky_height = sticky.outerHeight(),
		half_sticky_height = (sticky_height / 2);

(function ($) {
	//this makes it absolute if the pages loads half way down (though it waits until whole page is loaded to jump)
	$(window).load(function () {
		var docTop = $(this).scrollTop(),
		docBottom = docTop + $(this).height(),
		docHeight = $(document).height(),
		marginBottom = parseInt($('.reveal-wrapper').css('margin-bottom'));
		
		if(docBottom >= docHeight - marginBottom) {
				$('.sticky-footer').addClass('absolute');
			} else {

			}

		$(window).scroll(function () {
			var docTop = $(this).scrollTop(),
			docBottom = docTop + $(this).height(),
			docHeight = $(document).height(),
			marginBottom = parseInt($('.reveal-wrapper').css('margin-bottom'));

			if(docBottom >= docHeight - marginBottom) {
				$('.sticky-footer').addClass('absolute');
			} else {
				// this makes the footer stick back to bottom when the page goes back up
				$('.sticky-footer').removeClass('absolute');
			}

		})
	});
})(jQuery);



//new stuff
$(document).ready(function(){
    resizeDiv();
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    var viewportHeight = $(window).height();
    var bannerHeight = $('.headerbanner').height();
    var navHeight = $('.home-nav').height();
    var stickyFooterHeight = $('.sticky-footer').height();

    var innerWrapHeight = $('.inner-wrapper').height();

    var overallHeight = viewportHeight - bannerHeight - navHeight - stickyFooterHeight;

    if(innerWrapHeight > overallHeight) {
    	// var cropDat = innerWrapHeight - overallHeight;
    	$('.home .inner-wrapper').css({'max-height': viewportHeight});
    }

    console.log(overallHeight);
    $('.home .content .container').css({'height': overallHeight});
}
