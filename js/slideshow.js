var Slideshow = (function($){
  var TIMER = '';
  var TIMEOUT = 10000;
  var TRANSITION_TIME = 400;

  var _$slideshow = $('#slideshow');
  var _$wrapper = $('.slideshow-wrapper');
  var _$photo_credit = $('.photo-credit');
  var _$deck = _$slideshow.find('.slide');

  var _findSlideIndex = function (slide) {
    var i = 0;
    var _$slide = slide;
    for (var i = 0; i < _$deck.length-1; i++) {
      var _$existing_slide = $(_$deck[i]);
      if (_$slide.attr('style') == _$existing_slide.attr('style')) {
        return i;
      }
    }
  }

  var init = function () {
    var num = Math.floor((Math.random()*_$deck.length)+1); // get random slide
    display(num);
    TIMER = setTimeout('Slideshow.cycle();',TIMEOUT);
  };

  var display = function (num) {
    $('.slideshow-wrapper > .slide').addClass('fadeOut');
    var _$slide = $(_$deck[num-1]).clone();
    var caption = '<i class="icon-camera"></i> <span>' + _$slide.data('caption') + '</span>';
    _$wrapper.append(_$slide);
    $('.slideshow-wrapper .fadeOut').fadeOut(TRANSITION_TIME,function () {
      $(this).remove();
    });

    _$wrapper.children('.slide').show();
    _$photo_credit.html(caption).show();
  };

  var cycle = function () {
    var cur_slide = _$wrapper.children('.slide');
    var cur_index = _findSlideIndex(cur_slide);
    var new_index = 0;

    if (cur_index < _$deck.length) {
      new_index = cur_index+2;
    } else {
      new_index = 1; // start over at beginning
    }
    display(new_index);
    clearTimeout(TIMER);
    TIMER = setTimeout('Slideshow.cycle();',TIMEOUT);
  };

  var checkArrow = function (e) {
    e = e || window.event;

    if (e.keyCode == '39') {
      cycle();
    }
  }

  return {
      init : init,
      cycle : cycle,
      checkArrow : checkArrow
  };

})(jQuery);

Slideshow.init();

document.onkeydown = Slideshow.checkArrow;

