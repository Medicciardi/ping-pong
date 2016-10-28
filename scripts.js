//Business Logic
var numberArray = [];

function pingPong() {
  var highestValue = $("input#inputtedNumber").val();
  for (var i = 1; i <= highestValue; i++) {
    numberArray.push(i)
    if (i % 3 === 0 && i % 5 !== 0) {
      numberArray.splice(i - 1, 1, "ping");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      numberArray.splice(i - 1, 1, "pong");
    } else if (i % 5 === 0 && i % 3 === 0) {
      numberArray.splice(i - 1, 1, "pingpong");
    };

  };
};

// User Interface Logic
$().ready(function() {
  $("button#submit").click(function(event) {
    numberArray = [];
    event.preventDefault();
    $("ul#output").children("li").remove();
    pingPong();
    var value = $("input#inputtedNumber").val();
    for (var i = 0; i < value; i++) {
      $("ul#output").append("<li>" + numberArray[i] + "</li>")
    };

    });



});
