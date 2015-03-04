$(document).ready(function() {
   console.log( "document ready" );  

  $("#the-button").click(function() {
      // Add or remove a class, depending on whether it's currently present
      $("p").toggleClass("special");

      // Check whether the class exists
      if ($("p").hasClass("special")){
        alert("The paragraph is special!");
      }
      else {
        alert("The paragraph is not special.");
      }
    
      $("ul").append($("<li>").text("Try it again."));
  });
    
});