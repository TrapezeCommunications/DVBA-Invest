(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1]);
