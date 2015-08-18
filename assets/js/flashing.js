$(document).ready(function(){
  var blinking = false,
    interval,
    $blink = $('.blink');
  $('#blinkbutton').click(function(){
    if (!blinking){
      $('#blinkbutton').html('Click to stop blinking');
      interval = setInterval(function(){
        $blink.toggle();
      },200);
      blinking = true;
    }
    else
    {
      clearInterval(interval);
      $('#blinkbutton').html('Click to see non-compliant flashing');
      $blink.hide();
      blinking = false;
    }
  });
});
