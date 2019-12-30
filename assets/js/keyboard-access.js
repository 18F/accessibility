window.addEventListener('DOMContentLoaded', function() {
  var moveFocusLinks = document.getElementsByClassName('moveFocus');
  var keyboardTrapLinks = document.getElementsByClassName('keyboardTrap');

  function handleFocus() {
    keyboardTrapLinks[0].focus();
  }

  Array.from(moveFocusLinks).map(function(el) {
    el.addEventListener('focus', handleFocus);
  });

  Array.from(keyboardTrapLinks).map(function(el) {
    el.addEventListener('click', function() {
      Array.from(moveFocusLinks).map(function(el) {
        el.removeEventListener('focus', handleFocus);
      });
    });
  });
});
