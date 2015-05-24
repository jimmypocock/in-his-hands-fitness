var resetDimensions = function() {
  var winHeight = $(window).height()
  $(".main.section").css("max-height", (winHeight - 150) + "px");
  $(".main.section").css("height", (winHeight - 150) + "px")
}

$(window).on('resize', resetDimensions);