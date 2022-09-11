
///to top byn default fade out
$(document).ready(function(){
        $("#to-top").fadeOut(0)
});
/////////////to-top
$(function() {
  // Amount of scrolling before button is shown/hidden.
  var offset = 100;

  // Fade duration
  var duration = 500;

  // Toggle view of button when scrolling.
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#to-top').fadeIn(duration);
    } else {
      $('#to-top').fadeOut(duration);
    }
  });

  // Scroll to top when button is clicked.
  $('#to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
});
/////motion go to section in the page
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });
  //*//
//parallex mouse
$(document).ready(function(){
    $('#scene').parallax();
});
//////////show header
$(document).ready(function(){
  $(".btn-show").click(function(){
      $(".for-header").slideToggle();
  });
});
