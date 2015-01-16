(function() {

  $(window).scroll(function() {
    var scrollPos = $(this).scrollTop();

    $('.hero').css({
      'background-position': 'center ' + (scrollPos / 2) + 'px'
    });

    $('.banner-text').css({
      'margin-top': (-scrollPos * 1.25) + 'px'
    });

  });

})();
