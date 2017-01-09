$(document).ready(function(){
  
  $('.start').on('click', function(){
    $('.coffee').removeClass('full');
    $('.middle-section').toggleClass('active');
    $('.led').toggleClass('active');
    $('.cup').toggleClass('active');
    $('.drop').toggleClass('active');
    $('.coffee').toggleClass('active');
    setTimeout(function(){
    $('.coffee').addClass('full');}
  , 6500);
  });
  

  
  
  
  
});