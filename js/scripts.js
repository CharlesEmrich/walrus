$(function() {
  $("#show-link").click(function(){
    $("img").fadeIn();
    $("#show-link").toggle();
    $("#hide-link").toggle();
  });

  $("#hide-link").click(function(){
    $("img").fadeOut();
    $("#show-link").toggle();
    $("#hide-link").toggle();
  });

  $("h1").click(function(){
    console.log("Ping!");
    $(".walrus-p").show();
    $(".walrus-p").toggle();
  });

  $("#clear").click(function(){
    $("body").removeClass();
  });

  $("#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  jQuery("#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

var functionName = function (param) {
  return param + 1;
  //block of code goes here.
}

var aNumber = 9

console.log(functionName(5));

$();
jQuery();

// jQuery(document).ready(function(){
//
// })
