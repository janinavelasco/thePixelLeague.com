$(function() {
  //lazy load init
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });

  //menu init
  $('.menu-button').click(function (){
    $('nav').slideToggle('');
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

