'use strict';

var resetDimensions = function() {
  var winHeight = $(window).height(),
      section = $('.top.section'),
      boxHeight = $('.subscription.form').height(),
      navHeight = 52,
      paddingTop = (winHeight - boxHeight) / 2 - navHeight - 50;
  section.css('max-height', (winHeight - navHeight) + 'px');
  section.css('height', (winHeight - navHeight) + 'px');
  section.css('padding-top', paddingTop);
}

$(window).on('resize', resetDimensions);