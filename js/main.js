$(document).ready(function() {
  //  start open and close menu

  $(".open").click(function() {
    document.getElementById("Sidenav").style.width = "350px";
    document.getElementById("main").style.marginRight = "350px";
    document.body.style.overflowX = "hidden";
  });
  $(".closebtn").click(function() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  });

  //    end menu
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
