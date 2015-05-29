$(function() {
  tabCount = 1;
  $('.home-nav').each(function(index){
      $(this).addClass('onState_'+tabCount);
      tabCount++;
  });

  buildAccordion();

  if ($(window).width() > mediumBreakPoint) {
    $('.home-nav-content').hide();

    $('[class*=onState_] .tabs li').hover(function() {
        var selected_tab = $(this).find('a').attr('data-ref');
        var onState =  $(this).parent().parent().parent().attr('class');
        var className = onState.split(" ");
        var finalName = className.pop();

        $('.'+finalName+' .tabs li').removeClass('js-active');
        $(this).addClass('js-active');

        if ($(window).width() > mediumBreakPoint) {
            $('.'+finalName+' .home-nav-content').hide();
            $('.'+finalName+' '+selected_tab).show();
        } else {
            $('.'+finalName+' .home-nav-content').slideUp();
            $(this).next().slideDown();
        }

        return false;
    });
  }
  else {
    // THE UNIKITTY LEFT THIS MAGICAL JQUERY HERE WEEEEEEEEEEEEEE
    $('[class*=onState_] .tabs > ul > li').click(function() {
        var selected_tab = $(this).find('a').attr('data-ref');
        var onState =  $(this).parent().parent().parent().attr('class');
        var className = onState.split(" ");
        var finalName = className.pop();

        $('.'+finalName+' .tabs li').removeClass('js-active');

        //this makes the a tags not link to pages on the top level but still link on the lower level
        $('.'+finalName+' .tabs > ul > li > a').removeAttr('href');

        //slide list left
        $(this).addClass('js-active').siblings('li').andSelf().animate({
          left: '-110%',
        }, 500 );

        //slide drop downs left
        $('[class*=onState_] .tabs ul').find('li.js-active').next('div').animate({
          right: '0%',
        }, 500 );
    });

    $('[class*=onState_] .mobile-nav-back').click(function() {
        var selected_tab = $(this).find('a').attr('data-ref');
        var finalName =  $(this).parent().parent().parent().attr('class');

        //slide drop downs back right
        $('.'+finalName+' .tabs li').removeClass('js-active');
        $(this).parent().parent().parent().parent().animate({
          right: '-110%',
        }, 500 );

        //slide list back right
        $(this).parent().parent().parent().parent().siblings('li').animate({
          left: '0%',
        }, 500 );
    });

  }

  $(window).resize(function() {
     adjustContent();
  });
});


function adjustContent() {
  if ($(window).width() < mediumBreakPoint) {
      $('[class*=onState_] .tabs ul').find('li.js-active').next('div').show();
  } else {
      $('.cloned').hide();
      $('[class*=onState_]').each(function(index){
          var onState =  $(this).attr('class');
          var className = onState.split(" ");
          var finalName = className.pop();
          var toShow = $('.'+finalName+' .js-active a').attr('data-ref');
          $('.'+finalName+' .home-nav-content-container').find(toShow).show();
      });
  }
}

function buildAccordion(){
  $('.home-nav .tabs ul li').each(function(){
      id = $(this).find('a').attr('data-ref');
      $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).show();

      if ($(window).width() < mediumBreakPoint && $(this).hasClass('js-active')) {
          $(id).clone().removeAttr('id').addClass('cloned').insertAfter($(this)).show();
      }
  });
}
