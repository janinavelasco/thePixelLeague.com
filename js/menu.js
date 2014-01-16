$(function() {
  //lazy load init
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });

  //menu init
  $('.menu-button').click(function (){
    $('nav').toggle('');
  });

  $('.teamlink').click(function (){
    $.scrollTo('.theteam', 800); 
  });
  $('.processlink').click(function (){
    $.scrollTo('.theprocess', 800); 
  });
  $('.hireuslink').click(function (){
    $.scrollTo('.hireus', 800); 
  });

});

