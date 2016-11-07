// *hamburger nav*
$('.hamburger').on('click', function(){
  $('header nav').animate({
    left:0
  });
});

// on clicking of the close button in the nav, hide the nav by animating it's left value back to 100%
$('.close-nav').on('click', function(){
  $('header nav').animate({
    left:'100%'
  });
});


// *project overlay*
// *hover*
$(document).ready(function(){
$('.project-overlay').hover(function(){
  $(this).css("background-color","hsla(240,2%,92%,.55)");
}, function (){
$(this).css("background-color", "transparent");
  });
});


// *button overlay*
$(document).ready(function(){
$('.view-more-button').hover(function(){
  $(this).css("background-color","#fed7c8");
}, function (){
$(this).css("background-color", "transparent");
  });
});


// *slide toggle*
$("#middle-about").on("click", function(){
    $(".about-para").slideToggle();
});


