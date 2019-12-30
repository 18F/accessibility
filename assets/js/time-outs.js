window.addEventListener('DOMContentLoaded', function () {
  var timer,
    pForm = document.getElementById('pForm');

  Array.from(pForm.getElementsByTagName('input')).map(function (el) {
    el.addEventListener('input', function () {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        var c = confirm('Would you like more time to complete the form?'),
          timer
        if (c == true) {
          clearTimeout(timer);
        } else {
          pForm.reset();
        }
      }, 2000);
    })
  });
});
