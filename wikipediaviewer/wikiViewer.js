$(document).ready(function() {
  //on hovering over the search icon, make it grow
  $(".fa").mouseover(function(){
    $(this).animate({fontSize: "2em"});
  })

//on leave, make it shrink again
  $(".fa").mouseleave(function(){
      $(this).animate({fontSize: "1em"});
  })

//on click of the icon, display the search box
  $(".fa").click(function(){
    $("#search").toggleClass("hidden");
  })


});
