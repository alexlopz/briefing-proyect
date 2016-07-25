// By default, swipe is enabled.
$(window).load(setTimeout(function () {
	$('#preloader').fadeOut('slow');
	$('#loading').css({'overflow':'visible'});
  $('#contenedor').css({'display':'initial'});
}, 8000));

$(window).load(setTimeout(function () {
	$('#precarga').fadeOut('slow');
	$('#papa').css({'overflow':'visible'});
  $('#content').css({'display':'initial'});
}, 1000));



   $('section').horizon();

   // If you do not want to include another plugin, TouchSwipe, you can set it to false in the default options by passing in the option as false.
   //$('section').horizon({swipe: false});
