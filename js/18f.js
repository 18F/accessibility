
$(document).ready(function () {
  // load posts from tumblr
  var blog = '18fblog.tumblr.com';
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];


  // get tumblr posts
  $.ajax({
    url: '//api.tumblr.com/v2/blog/' + blog + '/posts/text?notes_info=true&limit=3&filter=text&api_key=cA9agkd1WdAsFUFL5iq1Wnn0m4Dmcv5vf5otES3Ou08r2D3Ldu',
    type: 'GET',
    contentType: 'application/json',
    dataType: 'jsonp',
    jsonpCallback: 'jsonp',
    success: function (result) {
      $("#blog-loading").hide();
      for (i in result.response.posts) {
        // render post to the page
        var post = result.response.posts[i];
        $('#blog' + i + ' .blog-title').html(post.title);
        $('#blog' + i + ' .blog-title').attr('href', post.post_url);
        $('#blog' + i + ' .blog-text').html(post.body);
        $('#blog' + i + ' .readmore').attr('href', post.post_url);
        var tagHtml = '';
        for (j in post.tags) {
          if (j != 0) {
            tagHtml += ', ';
          }
          tagHtml += '<a href="http://' + blog + '/tagged/' + encodeURIComponent(post.tags[j]) + '">' + post.tags[j] + '</a>';
        }
        $('#blog' + i + ' .blog-tags').html(tagHtml);
        var d = new Date(post.timestamp * 1000);
        var date = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
        $('#blog' + i + ' .blog-date').html(date);
        $('#blog' + i).show();
      }
      $(".blog-snippet").dotdotdot({
        watch: "window",
        after: "a.readmore"
      });
    },
    error: function (e) {
      $("#blog-loading .error").show();
    }
  });

  // linear fade-ins
  $('.fadeIn').each(function (e) {
    $(this).addClass('fade-'+e);
    var t = setTimeout("$('.fade-"+e+"').fadeIn(500)",500*e);
  });

  // team hover effect
  $('.bio').mouseenter(function () {
    var $img = $(this).find('.team-img');
    $img.data('original',$img.attr('src'));
    $(this).append('<img class="hover-img img-circle" src="' + $img.data('color') + '" />');
    var $hover_img = $(this).find('.hover-img');
    $hover_img.width($img.width()).height($img.height());
    $hover_img.animate({
      opacity: 1
    }, 'fast');
  }).mouseleave(function () {
    var $img = $(this).find('.team-img');
    $(this).find('.hover-img').fadeOut('slow',function () {
      $(this).remove();
    });
  });

  // img preloader
  $('body').append('<div id="preloader"></div>');
  $('.bio').find('img').each( function() {
    var src = $(this).data('color');
    var $pre = $('#preloader');
    $pre.append("<img src='" + src + "' />");
  });

  // slider preloader
  $('#slideshow .slide').each( function() {
    var src = ($(this).css('background-image'));
    src = src.replace('url(','').replace(')','');
    var $pre = $('#preloader');
    $pre.append("<img src='" + src + "' />");
  });
});

// IE Form Placeholders
$(function() {
  if(!$.support.placeholder) {
    var active = document.activeElement;
    $(':text').focus(function () {
      if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
        $(this).val('').removeClass('hasPlaceholder');
      }
    }).blur(function () {
      if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
        $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
      }
    });
    $(':text').blur();
    $(active).focus();
    $('form').submit(function () {
      $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
    });
  }
});

// friendly console message

// IE needs plaintext, sigh
// window._ie = true;
if (window._ie) {
  console.log("Oh hi there! By all means, poke around.");
  console.log("");
  console.log("If you find a bug or want to talk, we're at 18f@gsa.gov and track issues on https://github.com/18f/18f.gsa.gov/issues");
  console.log("And check us out on GitHub generally! We're an open source team. https://github.com/18f");
}

// otherwise, let's get fancy
else {
  var styles = {
    big: "font-size: 24pt; font-weight: bold; color: #18f",
    medium: "font-size: 10pt",
    medium_bold: "font-size: 10pt; font-weight: bold",
    medium_link: "font-size: 10pt; color: #18f" // works in Firebug, not Chrome
  };
  console.log("%cOh hi there! Please poke around.", styles.big);
  console.log(" ");
  console.log("%cIf you find a bug or want to talk, we're at %c18f@gsa.gov%c and track issues on %chttps://github.com/18f/18f.gsa.gov/issues", styles.medium, styles.medium_bold, styles.medium, styles.medium_link);
  console.log("%cAnd check us out on GitHub generally! We're an %copen source team%c. %chttps://github.com/18f", styles.medium, styles.medium_bold, styles.medium, styles.medium_link);
}
