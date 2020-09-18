var element_position = $("#scroll-to").offset().top - 0;
var el = $("#checkHeaderClass");

$(window).on("scroll", function () {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = element_position;

  if (y_scroll_pos > scroll_pos_test) {
    if (el.hasClass("header-background")) {
      $("#scroll-fix1").removeClass("indexHover");
      $("#scroll-fix2").removeClass("indexHover");
      $("#scroll-fix1").addClass("scrollDownNavbarStyle");
      $("#scroll-fix2").addClass("scrollDownNavbarStyle");
    }
  } else {
    $("#scroll-fix1").addClass("indexHover");
    $("#scroll-fix2").addClass("indexHover");
    $("#scroll-fix1").removeClass("scrollDownNavbarStyle");
    $("#scroll-fix2").removeClass("scrollDownNavbarStyle");
  }
});
