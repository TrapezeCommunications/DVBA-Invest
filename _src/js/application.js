/*---------------------------------------------------------*
// The Jquery way to do this:

$(function() {

  // Main Navigation Toggle
  $('.site-nav .menu-icon').click(function() {
    $('.site-nav').toggleClass("activated");
  });


  // Sub Navigation Toggling
  $('.site-nav .menu li').click(function() {
    
    if (!$(this).hasClass("activated") ) {
      $('.site-nav .menu li').removeClass("activated")
    }
    
    $(this).toggleClass("activated")

  });

});




/*---------------------------------------------------------*/
// Using only Javascript


// Quick function to test if an element has a class from http://sonnyt.com/javascript-check-if-element-has-class/
// bound to the Element prototype (so we can call it like element.hasClass("classname") )=
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

var primaryNav = document.getElementById("primary-nav"),
    navToggle = document.getElementById("nav-hamburger-icon");

var navItems = primaryNav.querySelectorAll("#primary-nav .menu > li");


for (var i = 0; i < navItems.length; i++ ) {

  navItems[i].addEventListener("click", function() {

    if ( this.hasClass("activated") ) {
      this.className = "";
    } else {
      for (var j = 0; j < navItems.length; j++ ) {
        navItems[j].className = "";
      }
      this.className = "activated";
    }

  })
}


// WORKING Bind event listener for primary menu toggle.
navToggle.addEventListener("click", function() {

  if ( primaryNav.hasClass("activated") ) {
    primaryNav.className = "";
  } else {
    primaryNav.className = "activated";
  }

});

