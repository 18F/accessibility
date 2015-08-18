$(document).ready(function(){
  var timer;
  $('#pForm input').on('input',function(){
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(function(){
      var c = confirm('Would you like more time to complete the form?'),
      time;
      if(c == true)
        clearTimeout(timer);
      else
        $('#pForm').trigger('reset');
    }, 2000);
  });
});
