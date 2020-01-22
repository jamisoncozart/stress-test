$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    
    var score = 0;
    $("input:checkbox[name=warning]:checked").each(function() {
      score += 1;
    })
    $("input:checkbox[name=health]:checked").each(function() {
      score += 1;
    })
    $("input:checkbox[name=coping]:checked").each(function() {
      score += 1;
    })
    if(score > 6) {
      $("#goodOutput").text('You need help, here is how to improve: Go to google')
    } else if(score > 3 && score <= 6) {
      $("#goodOutput").text("You need to change some things, but you don't need immediate help.")
    } else {
      $("#goodOutput").text("Good job! You are doing just fine!")
    }
    $("#form")[0].reset();
  })
})