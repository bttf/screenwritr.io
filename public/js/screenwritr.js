(function() {

  handleResize();
  $(window).resize(handleResize);
  $(window).scroll(handleScrollEvent);

  function handleResize() {
    var width = $(window).width();

    if (width < 800) {
      $('.headline').css('font-size', (width / (800 / 4)) + 'em');
      $('.hero').css('height', (width * 400) / 800 + 'px');
      $('.banner-text').css({
        'font-size': (width / (800 / 5)) + 'em',
        'top': ($('.hero').height() * 250) / 400 + 'px'
      });
    }
  }

  function handleScrollEvent() {
    var scrollPos = $(this).scrollTop();
    // hero banner parallax
    $('.hero').css('background-position', 'center ' + (scrollPos / 2) + 'px');
    // hero banner text parallax
    $('.banner-text').css('margin-top', (-scrollPos * 1.25) + 'px');
  }

})();
