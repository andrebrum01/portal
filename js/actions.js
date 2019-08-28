$(window).scroll(function() {    
var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("#nav-roler").addClass("depois");
  } else {
    $("#nav-roler").removeClass("depois"); 
  }
});