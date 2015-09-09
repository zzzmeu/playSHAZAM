$( "#mainbutton" ).click(function() {
  $("#disclaimer").fadeOut(500, function(){
    $("#player-holder").fadeIn(500);
    $("#mid").fadeIn(500);
  })
});