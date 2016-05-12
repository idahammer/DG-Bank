$(document).ready(function() {
	// Stuff here runs when the sketch is ready for action.
	// This is when we wire-up events, like the following.

	// Here, we wire up the 'click' event for the selector
	// #clickMe (which corresponds to an element with id 'clickMe')
	// to a function named 'clickHandler' (which we define later)
	$("#clickMe").on("click", clickHandler);

  // Prevent normal iOS/Android touch gestures
  $('body').on('touchmove', function(e) {
    e.preventDefault();
  });

  // Important! Initialise Hammer
  var hammertime = new Hammer($('.swipearea').get(0));

  // Listen for 'swipe' events
  hammertime.on('swipe', onSwipe);
});

function clickHandler() {
  alert("Yep, you clicked the button in DG-Bank!");
}

// Change color based on velocity
function onSwipe(e) {
  var max = 6; // The highest allowed velocity value
  var percentage = Math.abs(e.velocityX) / max;

  // Make sure we don't exceed 1
  percentage = Math.min(percentage, 1);
  if(percentage > 0.9)
  {
    // Snap to 1 when over 90%.
    percentage = 1;
    $(".swipearea").text("hell");
    // Succefully unlocked! do something!
  }

  // Convert velocity (which is now 0.0-1.0) to the rgb scale.
  // In the basic way of expressing colour, each part of colour
  // can be expressed from 0-255, with 255 being the maximum
  var red = 255 * percentage;

  // Round to an integer value
  red = Math.round(red);

  // Set our red amount to the background
  // and use 0 for the green and blue values
  $('.swipearea').css({
    'background-color': 'rgb('+ red +',0,0)'

  });

}
