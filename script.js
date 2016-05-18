$(document).ready(function() {
	// Stuff here runs when the sketch is ready for action.
	// This is when we wire-up events, like the following.

  // Prevent normal iOS/Android touch gestures
  $('body').on('touchmove', function(e) {
    e.preventDefault();
  });

  /* Disabled slider handle - not working.
  $('#swipearea').on('pointerdown', function(e) {
    //e.preventDefault();
    setSwipeButtonPos(0);
  });
  $('#swipearea').on('pointerup', function(e) {
    //e.preventDefault();
    setSwipeButtonPos(1);
  });*/
  /*$('#swipearea').on('touchmove', function(e) {
    //e.preventDefault();
    console.dir(e);
    //setSwipeButtonPos(1);
  });*/

  // Important! Initialise Hammer
  var hammertime = new Hammer($('#swipearea').get(0));

  // Listen for 'swipe' events
  hammertime.on('swipe', onSwipe);
});

function setSwipeButtonPos(percentage) {
  var wb = $("#swipebutton").outerWidth();
  var whb = wb / 2;
  var w = $("#swipearea").innerWidth() - wb;
  var px = (w * percentage);
  console.log(px);
  $("#swipebutton").css({left: px + "px"});
}

// Change color based on velocity
function onSwipe(e) {
  var max = 6; // The highest allowed velocity value

  // Check swipe amunt.
  var percentage = 0;
  var swipedir = $("#swipearea").data("direction"); 
  if(swipedir == "vertical") 
  {
    // Vertical swipe.
    percentage = Math.abs(e.velocityY) / max;
  } else {
    // Horizontal swipe.
    percentage = Math.abs(e.velocityX) / max;
  }

  // Make sure we don't exceed 1
  percentage = Math.min(percentage, 1);
  //setSwipeButtonPos(percentage);
  if(percentage > 0.8)
  {
    // Snap to 1 when over 90%.
    percentage = 1;
    // Succefully unlocked! do something!
		document.location.href = $("#swipearea").data("target");
  }

  // Convert velocity (which is now 0.0-1.0) to the rgb scale.
  // In the basic way of expressing colour, each part of colour
  // can be expressed from 0-255, with 255 being the maximum
  var red = 255 * percentage;

  // Round to an integer value
  red = Math.round(red);

  // Set our red amount to the background
  // and use 0 for the green and blue values
  $('#swipearea').css({
    'background-color': 'rgb('+ red +',0,0)'

  });

}
