var resetDimensions = function() {
  var winHeight = $(window).height()
  $(".page").css("max-height", (winHeight) + "px");
  $(".page").css("height", (winHeight) + "px")
}

$(window).on('resize', resetDimensions);