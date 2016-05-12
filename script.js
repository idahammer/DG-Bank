$(document).ready(function() {
	// Stuff here runs when the sketch is ready for action.
	// This is when we wire-up events, like the following.

	// Here, we wire up the 'click' event for the selector
	// #clickMe (which corresponds to an element with id 'clickMe')
	// to a function named 'clickHandler' (which we define later)
	$("#clickMe").on("click", clickHandler);

  function clickHandler() {
  	alert("Yep, you clicked the button in ida!");
  }
