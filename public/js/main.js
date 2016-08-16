// By default, swipe is enabled.
$(window).load(setTimeout(function () {
	$('#preloader').fadeOut('slow');
	$('#loading').css({'overflow':'visible'});
  $('#contenedor').css({'display':'initial'});
}, 500));

$(window).load(setTimeout(function () {
	$('#precarga').fadeOut('slow');
	$('#papa').css({'overflow':'visible'});
  $('#content').css({'display':'initial'});
}, 1000));



   $('section').horizon();

   // If you do not want to include another plugin, TouchSwipe, you can set it to false in the default options by passing in the option as false.
   //$('section').horizon({swipe: false});

// fotos galerias

// ladrillo
$('#ladrillo-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [{
							"src": '/img/galerias/museo-ladrillo/IMG_9369.jpg',
							'thumb': '/img/galerias/museo-ladrillo/miniaturas/IMG_9369.jpg'
					}, {
							'src': '/img/galerias/museo-ladrillo/IMG_9374.jpg',
							'thumb': '/img/galerias/museo-ladrillo/miniaturas/IMG_9374.jpg'

					}, {
							'src': '/img/galerias/museo-ladrillo/IMG_9377.jpg',
							'thumb': '/img/galerias/museo-ladrillo/miniaturas/IMG_9377.jpg'
					}, {
							'src': '/img/galerias/museo-ladrillo/IMG_9381.jpg',
							'thumb': '/img/galerias/museo-ladrillo/miniaturas/IMG_9381.jpg'

					}, {
							'src': '/img/galerias/museo-ladrillo/IMG_9398.jpg',
							'thumb': '/img/galerias/museo-ladrillo/miniaturas/IMG_9398.jpg'
					}, {
							'src': '/img/galerias/museo-ladrillo/IMG_9400.jpg',
							'thumb': '/img/galerias/museo-ladrillo/miniaturas/IMG_9400.jpg'
					}

				]
			})

});

// damy
$('#damy-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [{
							"src": '/img/galerias/damy/Screenshot_4.jpg',
							'thumb': '/img/galerias/damy/miniaturas/Screenshot_4.jpg'
					}, {
							'src': '/img/galerias/damy/Screenshot_5.jpg',
							'thumb': '/img/galerias/damy/miniaturas/Screenshot_5.jpg'

					}, {
							'src': '/img/galerias/damy/Screenshot_11.jpg',
							'thumb': '/img/galerias/damy/miniaturas/Screenshot_11.jpg'
					}, {
							'src': '/img/galerias/damy/Screenshot_12.jpg',
							'thumb': '/img/galerias/damy/miniaturas/Screenshot_12.jpg'

					}, {
							'src': '/img/galerias/damy/IMG_6019.jpg',
							'thumb': '/img/galerias/damy/miniaturas/IMG_6019.jpg'
					}, {
							'src': '/img/galerias/damy/IMG_6029.jpg',
							'thumb': '/img/galerias/damy/miniaturas/IMG_6029.jpg'
					}

				]
			})

});

// ceviches arce
$('#arce-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [{
							"src": '/img/galerias/ceviches-arce/2.jpg',
							'thumb': '/img/galerias/ceviches-arce/miniaturas/2.jpg'
					}, {
							'src': '/img/galerias/ceviches-arce/3.jpg',
							'thumb': '/img/galerias/ceviches-arce/miniaturas/3.jpg'

					}, {
							'src': '/img/galerias/ceviches-arce/4.jpg',
							'thumb': '/img/galerias/ceviches-arce/miniaturas/4.jpg'
					}, {
							'src': '/img/galerias/ceviches-arce/5.jpg',
							'thumb': '/img/galerias/ceviches-arce/miniaturas/5.jpg'

					}

				]
			})

});

// Doña Chus Tamales
$('#chus-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [{
							"src": '/img/galerias/dona-chus/ayuda.jpg',
							'thumb': '/img/galerias/dona-chus/miniaturas/ayuda.jpg'
					}, {
							'src': '/img/galerias/dona-chus/casa.jpg',
							'thumb': '/img/galerias/dona-chus/miniaturas/casa.jpg'

					}, {
							'src': '/img/galerias/dona-chus/dona-chus.jpg',
							'thumb': '/img/galerias/dona-chus/miniaturas/dona-chus.jpg'
					}, {
							'src': '/img/galerias/dona-chus/DSC_7257.jpg',
							'thumb': '/img/galerias/dona-chus/miniaturas/DSC_7257.jpg'
					}, {
							'src': '/img/galerias/dona-chus/FATIMA.jpg',
							'thumb': '/img/galerias/dona-chus/miniaturas/FATIMA.jpg'
					},{
							'src': '/img/galerias/dona-chus/gastos.jpg',
							'thumb': '/img/galerias/dona-chus/miniaturas/gastos.jpg'
					},{
							'src': '/img/galerias/dona-chus/reticula.jpg',
							'thumb': '/img/galerias/dona-chus/miniaturas/IMG_1569.jpg'
					}

				]
			})

});
// variadito
$('#variadito-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
							"src": '/img/galerias/variadito/1.jpg',
							'thumb': '/img/galerias/variadito/miniaturas/1.jpg'
					}, {
							'src': '/img/galerias/variadito/2.jpg',
							'thumb': '/img/galerias/variadito/miniaturas/2.jpg'

					}, {
							'src': '/img/galerias/variadito/3.jpg',
							'thumb': '/img/galerias/variadito/miniaturas/3.jpg'
					}

				]
			})

});


// videos
$('#video-principal, #video-galeria, #fruzi, #damy-video, #arce-video, #chus-video, #variadito-video, #francis-video, #leavy-video, #cris-video, #somos-video, #flores-video, #antonio-video, #bendicion-video, #pansa-video, #tones-video, #rukill2-video, #vivero-video, #tex-video, #ana-video').lightGallery({
  loadYoutubeThumbnail: false,
});
