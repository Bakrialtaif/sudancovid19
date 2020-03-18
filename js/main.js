$(document).ready(function() {
  //  start scroll top
  var scrool = $("#scroll-up");
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {
      scrool.show();
    } else {
      scrool.hide();
    }
  });
  scrool.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 900);
  });
  //  end scroll top
});
