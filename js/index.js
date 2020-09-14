var element_position = $("#scroll-to").offset().top - 0;
var el = $("#checkHeaderClass");

$(window).on("scroll", function () {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = element_position;

  if (y_scroll_pos > scroll_pos_test) {
    if (el.hasClass("header-background")) {
      $("#scroll-fix1").removeClass("dropdown-content2");
      $("#scroll-fix2").removeClass("dropdown-content2");
    }
  } else {
    $("#scroll-fix1").addClass("dropdown-content2");
    $("#scroll-fix2").addClass("dropdown-content2");
  }
});
