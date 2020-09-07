var section = document.querySelector(".fh5co-counters");
var hasEntered = false;

window.addEventListener("scroll", (e) => {
  var shouldAnimate = window.scrollY + window.innerHeight >= section.offsetTop;

  if (shouldAnimate && !hasEntered) {
    hasEntered = true;

    $(".js-counter").each(function () {
      $(this)
        .prop("js-counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
});
