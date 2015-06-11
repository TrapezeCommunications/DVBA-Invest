$(function() {

  $('.site-nav .menu-icon').click(function() {
    $('.site-nav').toggleClass("activated");
  });

  $('.site-nav .menu li').click(function() {
    
    if (!$(this).hasClass("activated") ) {
      $('.site-nav .menu li').removeClass("activated")
    }
    
    $(this).toggleClass("activated")

  });

});