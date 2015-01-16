(function() {

  $(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    $('.hero').css({
      'background-position': 'center ' + (scrollPos/2) + 'px'
    });
  });

})();
