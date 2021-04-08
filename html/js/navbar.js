$(document).ready(function () {
   var scroll_start = 0;
   var startchange = $('#nav');
   var offset = startchange.offset();
   $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
         $('#nav').css('background-color', '#18477E');
         $('.nav').css('background-color', '#18477E');
      } else {
         $('#nav').css('background-color', 'transparent');
         $('.nav').css('background-color', '#18477E');
      }
   });
});

$(window).on('beforeunload', function () {
   $(window).scrollTop(0);
});



