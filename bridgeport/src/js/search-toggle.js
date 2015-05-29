// Search Toggle
$(function() {
    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $(".search-box").slideToggle("slow");
    });
});

// Homepage Mobile Search Toggle
$(function() {
    $('.open-search').click(function() {
      $('.mobile-search-box-home').slideToggle("slow");
    });
});

// Inside Pages drop down whole nav and search plus take over page like modal
$(function() {
    $('.open-mobile-mega').click(function() {
      $('.home-nav').slideToggle("slow");
      $('.home-nav').addClass('js-mobile-screen-takeover');
    });
});