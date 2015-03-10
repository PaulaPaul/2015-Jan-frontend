$(document).ready(function() {
  console.log( "document ready" );  
  var balance;
  balance = 0;

  $("#balance").click(function() {
      // show the balance in the message area
      $("#message").text("Your balance is: " + balance.toString());      
  });
  
  $("#deposit").click(function() {
     var amount = parseFloat($("#d_amount").val());
     console.log( amount.toString() );  
     balance = balance + amount;
     // show the results in the message area
     $("#message").text("Thank you for your deposit!");      
  });
  
  $("#withdraw").click(function() {
    var amount = parseFloat($("#w_amount").val());
    console.log( amount.toString() );  
    if (amount > balance) {
      $("#message").text("You don't have enough money!"); 
    }
    else {
      // show the results in the message area
      balance = balance + amount;
      $("#message").text("Withdrawal complete.  Thank you for your business!"); 
    }
  });
    
});