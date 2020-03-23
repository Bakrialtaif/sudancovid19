$(document).ready(function() {
  //  start open and close menu

  $(".open").click(function() {
    document.getElementById("Sidenav").style.width = "100%";
    document.body.style.overflowX = "hidden";
  });
  $(".closebtn").click(function() {
    document.getElementById("Sidenav").style.width = "0";
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
  // style header boxShadow when  the scroll == 1000

  var header = $("header");

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 80) {
      $(header).addClass("fixed-top");
      $(header).css("boxShadow", "0px 0px 2.6rem #e4e3e3");
    } else {
      $(header).removeClass("fixed-top");
      $(header).css("boxShadow", "none");
    }
  });
  //   style header boxShadow when  the scroll == 1000

  //    color active

  $("header .navmenu .linknav  a").click(function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });

  $(" .nav-menu .link-nav  a").click(function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
  // end color active
});
