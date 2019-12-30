window.addEventListener('DOMContentLoaded', function () {
  console.log('foo')
  var blinking = false,
    interval,
    blinkEl = document.getElementsByClassName('blink')[0],
    blinkBtn = document.getElementById('blinkbutton');

  function toggleBlinking(el) {
    var display = el.style.display;
    if (display === 'inline') {
      el.style.display = 'none';
    } else {
      el.style.display = 'inline';
    }
  }

  blinkBtn.addEventListener('click', function () {
    if (!blinking) {
      blinkBtn.innerText = 'Click to stop blinking'
      interval = setInterval(function () {
        toggleBlinking(blinkEl)
      }, 200);
      blinking = true;
    } else {
      clearInterval(interval);
      blinkBtn.innerText = 'Click to see non-compliant flashing';
      blinkEl.style.display = 'none';
      blinking = false;
    }
  })
});
