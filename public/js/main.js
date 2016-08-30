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
							"src": '/img/galerias/damy/screenshot_4.jpg',
							'thumb': '/img/galerias/damy/miniaturas/screenshot_4.jpg'
					}, {
							'src': '/img/galerias/damy/screenshot_5.jpg',
							'thumb': '/img/galerias/damy/miniaturas/screenshot_5.jpg'

					}, {
							'src': '/img/galerias/damy/screenshot_11.jpg',
							'thumb': '/img/galerias/damy/miniaturas/screenshot_11.jpg'
					}, {
							'src': '/img/galerias/damy/screenshot_12.jpg',
							'thumb': '/img/galerias/damy/miniaturas/screenshot_12.jpg'

					}, {
							'src': '/img/galerias/damy/img_6019.jpg',
							'thumb': '/img/galerias/damy/miniaturas/img_6019.jpg'
					}, {
							'src': '/img/galerias/damy/img_6029.jpg',
							'thumb': '/img/galerias/damy/miniaturas/img_6029.jpg'
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

// manjares

$('#manjares-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
							"src": '/img/galerias/manjares/1.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/1.jpg'
					}, {
							'src': '/img/galerias/manjares/2.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/2.jpg'

					}, {
							'src': '/img/galerias/manjares/3.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/3.jpg'
					},	{
							"src": '/img/galerias/manjares/4.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/4.jpg'
					}, {
							'src': '/img/galerias/manjares/5.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/5.jpg'

					}, {
							'src': '/img/galerias/manjares/6.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/6.jpg'
					}, 	{
							"src": '/img/galerias/manjares/7.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/7.jpg'
					}, {
							'src': '/img/galerias/manjares/8.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/8.jpg'

					}, {
							'src': '/img/galerias/manjares/9.jpg',
							'thumb': '/img/galerias/manjares/miniaturas/9.jpg'
					}

				]
			})

});
// fruzi
$('#fruzi-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
							'src': '/img/galerias/fruzi/1.jpg',
							 'thumb': '/img/galerias/fruzi/miniaturas/1.jpg'
							},
							{
							'src': '/img/galerias/fruzi/2.jpg',
							 'thumb': '/img/galerias/fruzi/miniaturas/2.jpg'
							},
							{
							'src': '/img/galerias/fruzi/3.jpg',
							 'thumb': '/img/galerias/fruzi/miniaturas/3.jpg'
							},
							{
							'src': '/img/galerias/fruzi/4.jpg',
							 'thumb': '/img/galerias/fruzi/miniaturas/4.jpg'
							},
							{
							'src': '/img/galerias/fruzi/5.jpg',
							 'thumb': '/img/galerias/fruzi/miniaturas/5.jpg'
							},
							{
							'src': '/img/galerias/fruzi/6.jpg',
							 'thumb': '/img/galerias/fruzi/miniaturas/6.jpg'
							}

				]
			})

});
// mary
$('#mari-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
							'src': '/img/galerias/mary/1.jpg',
							 'thumb': '/img/galerias/mary/miniaturas/1.jpg'
							},
							{
							'src': '/img/galerias/mary/2.jpg',
							 'thumb': '/img/galerias/mary/miniaturas/2.jpg'
							},
							{
							'src': '/img/galerias/mary/3.jpg',
							 'thumb': '/img/galerias/mary/miniaturas/3.jpg'
							},
							{
							'src': '/img/galerias/mary/4.jpg',
							 'thumb': '/img/galerias/mary/miniaturas/4.jpg'
							},
							{
							'src': '/img/galerias/mary/5.jpg',
							 'thumb': '/img/galerias/mary/miniaturas/5.jpg'
							}

				]
			})

});
// cevichon
$('#cevichon-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
					{
					'src': '/img/galerias/cevichon/1.jpg',
					 'thumb': '/img/galerias/cevichon/miniaturas/1.jpg'
					},
					{
					'src': '/img/galerias/cevichon/2.jpg',
					 'thumb': '/img/galerias/cevichon/miniaturas/2.jpg'
					},
					{
					'src': '/img/galerias/cevichon/3.jpg',
					 'thumb': '/img/galerias/cevichon/miniaturas/3.jpg'
					},
					{
					'src': '/img/galerias/cevichon/4.jpg',
					 'thumb': '/img/galerias/cevichon/miniaturas/4.jpg'
					}


				]
			})

});
// ceviches tex
$('#tex-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
					{
					'src': '/img/galerias/tex/1.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/1.jpg'
					},
					{
					'src': '/img/galerias/tex/2.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/2.jpg'
					},
					{
					'src': '/img/galerias/tex/3.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/3.jpg'
					},
					{
					'src': '/img/galerias/tex/4.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/4.jpg'
					}


				]
			})

});
// vere

$('#vere-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
							'src': '/img/galerias/vere/1.jpg',
							 'thumb': '/img/galerias/vere/miniaturas/1.jpg'
							},
							{
							'src': '/img/galerias/vere/2.jpg',
							 'thumb': '/img/galerias/vere/miniaturas/2.jpg'
							},
							{
							'src': '/img/galerias/vere/3.jpg',
							 'thumb': '/img/galerias/vere/miniaturas/3.jpg'
							},
							{
							'src': '/img/galerias/vere/4.jpg',
							 'thumb': '/img/galerias/vere/miniaturas/4.jpg'
							},
							{
							'src': '/img/galerias/vere/5.jpg',
							 'thumb': '/img/galerias/vere/miniaturas/5.jpg'
							},
							{
							'src': '/img/galerias/vere/6.jpg',
							 'thumb': '/img/galerias/vere/miniaturas/6.jpg'
						 },	{
 							'src': '/img/galerias/vere/7.jpg',
 							 'thumb': '/img/galerias/vere/miniaturas/7.jpg'
 							},
 							{
 							'src': '/img/galerias/vere/8.jpg',
 							 'thumb': '/img/galerias/vere/miniaturas/8.jpg'
 							},
 							{
 							'src': '/img/galerias/vere/9.jpg',
 							 'thumb': '/img/galerias/vere/miniaturas/9.jpg'
 							}

				]
			})

});
// heladin

$('#heladin-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
						'src': '/img/galerias/heladin/1.jpg',
						 'thumb': '/img/galerias/heladin/miniaturas/1.jpg'
						},
						{
						'src': '/img/galerias/heladin/2.jpg',
						 'thumb': '/img/galerias/heladin/miniaturas/2.jpg'
						},
						{
						'src': '/img/galerias/heladin/3.jpg',
						 'thumb': '/img/galerias/heladin/miniaturas/3.jpg'
						},
						{
						'src': '/img/galerias/heladin/4.jpg',
						 'thumb': '/img/galerias/heladin/miniaturas/4.jpg'
						},
						{
						'src': '/img/galerias/heladin/5.jpg',
						 'thumb': '/img/galerias/heladin/miniaturas/5.jpg'
						},
						{
						'src': '/img/galerias/heladin/6.jpg',
						 'thumb': '/img/galerias/heladin/miniaturas/6.jpg'
						}


				]
			})

});
// mariela
$('#mariela-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
							'src': '/img/galerias/mariela/1.jpg',
							 'thumb': '/img/galerias/mariela/miniaturas/1.jpg'
							},
							{
							'src': '/img/galerias/mariela/2.jpg',
							 'thumb': '/img/galerias/mariela/miniaturas/2.jpg'
							},
							{
							'src': '/img/galerias/mariela/3.jpg',
							 'thumb': '/img/galerias/mariela/miniaturas/3.jpg'
							},
							{
							'src': '/img/galerias/mariela/4.jpg',
							 'thumb': '/img/galerias/mariela/miniaturas/4.jpg'
							},
							{
							'src': '/img/galerias/mariela/5.jpg',
							 'thumb': '/img/galerias/mariela/miniaturas/5.jpg'
							},
							{
							'src': '/img/galerias/mariela/6.jpg',
							 'thumb': '/img/galerias/mariela/miniaturas/6.jpg'
						 },	{
 							'src': '/img/galerias/mariela/7.jpg',
 							 'thumb': '/img/galerias/mariela/miniaturas/7.jpg'
 							},
 							{
 							'src': '/img/galerias/mariela/8.jpg',
 							 'thumb': '/img/galerias/mariela/miniaturas/8.jpg'
 							},
 							{
 							'src': '/img/galerias/mariela/9.jpg',
 							 'thumb': '/img/galerias/mariela/miniaturas/9.jpg'
						 },{
						 'src': '/img/galerias/mariela/10.jpg',
							'thumb': '/img/galerias/mariela/miniaturas/10.jpg'
						},	{
						 'src': '/img/galerias/mariela/11.jpg',
							'thumb': '/img/galerias/mariela/miniaturas/11.jpg'
						 },
						 {
						 'src': '/img/galerias/mariela/12.jpg',
							'thumb': '/img/galerias/mariela/miniaturas/12.jpg'
						 },

				]
			})

});

// ################################### galeria seccion 2

// jardin

$('#vivero-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
						'src': '/img/galerias/jardin/1.jpg',
						 'thumb': '/img/galerias/jardin/miniaturas/1.jpg'
						},
						{
						'src': '/img/galerias/jardin/2.jpg',
						 'thumb': '/img/galerias/jardin/miniaturas/2.jpg'
						},
						{
						'src': '/img/galerias/jardin/3.jpg',
						 'thumb': '/img/galerias/jardin/miniaturas/3.jpg'
						},
						{
						'src': '/img/galerias/jardin/4.jpg',
						 'thumb': '/img/galerias/jardin/miniaturas/4.jpg'
						},
						{
						'src': '/img/galerias/jardin/5.jpg',
						 'thumb': '/img/galerias/jardin/miniaturas/5.jpg'
						}



				]
			})

});
// tex 2
$('#tex2-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
					{
					'src': '/img/galerias/tex/1.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/1.jpg'
					},
					{
					'src': '/img/galerias/tex/2.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/2.jpg'
					},
					{
					'src': '/img/galerias/tex/3.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/3.jpg'
					},
					{
					'src': '/img/galerias/tex/4.jpg',
					 'thumb': '/img/galerias/tex/miniaturas/4.jpg'
					}


				]
			})

});
//ana
$('#ana-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
				{
				'src': '/img/galerias/ana/1.jpg',
				 'thumb': '/img/galerias/ana/miniaturas/1.jpg'
				},
				{
				'src': '/img/galerias/ana/2.jpg',
				 'thumb': '/img/galerias/ana/miniaturas/2.jpg'
				},
				{
				'src': '/img/galerias/ana/3.jpg',
				 'thumb': '/img/galerias/ana/miniaturas/3.jpg'
				},
				{
				'src': '/img/galerias/ana/4.jpg',
				 'thumb': '/img/galerias/ana/miniaturas/4.jpg'
				}



				]
			})

});
// pansa
$('#pansa-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
			{
			'src': '/img/galerias/pansa/1.jpg',
			 'thumb': '/img/galerias/pansa/miniaturas/1.jpg'
			},
			{
			'src': '/img/galerias/pansa/2.jpg',
			 'thumb': '/img/galerias/pansa/miniaturas/2.jpg'
			},
			{
			'src': '/img/galerias/pansa/3.jpg',
			 'thumb': '/img/galerias/pansa/miniaturas/3.jpg'
			},
			{
			'src': '/img/galerias/pansa/4.jpg',
			 'thumb': '/img/galerias/pansa/miniaturas/4.jpg'
			},
			{
			'src': '/img/galerias/pansa/5.jpg',
			 'thumb': '/img/galerias/pansa/miniaturas/5.jpg'
			}




				]
			})

});
// bendicion
$('#bendicion-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
		{
		'src': '/img/galerias/bendicion/1.jpg',
		 'thumb': '/img/galerias/bendicion/miniaturas/1.jpg'
		},
		{
		'src': '/img/galerias/bendicion/2.jpg',
		 'thumb': '/img/galerias/bendicion/miniaturas/2.jpg'
		},
		{
		'src': '/img/galerias/bendicion/3.jpg',
		 'thumb': '/img/galerias/bendicion/miniaturas/3.jpg'
		},
		{
		'src': '/img/galerias/bendicion/4.jpg',
		 'thumb': '/img/galerias/bendicion/miniaturas/4.jpg'
		},
		{
		'src': '/img/galerias/bendicion/5.jpg',
		 'thumb': '/img/galerias/bendicion/miniaturas/5.jpg'
		}

				]
			})

});

// tones
$('#tones-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
		{
		'src': '/img/galerias/tones/1.jpg',
		 'thumb': '/img/galerias/tones/miniaturas/1.jpg'
		},
		{
		'src': '/img/galerias/tones/2.jpg',
		 'thumb': '/img/galerias/tones/miniaturas/2.jpg'
		},
		{
		'src': '/img/galerias/tones/3.jpg',
		 'thumb': '/img/galerias/tones/miniaturas/3.jpg'
		},
		{
		'src': '/img/galerias/tones/4.jpg',
		 'thumb': '/img/galerias/tones/miniaturas/4.jpg'
		},
		{
		'src': '/img/galerias/tones/5.jpg',
		 'thumb': '/img/galerias/tones/miniaturas/5.jpg'
	 },
	 {
	 'src': '/img/galerias/tones/6.jpg',
		'thumb': '/img/galerias/tones/miniaturas/6.jpg'
	 },
	 {
	 'src': '/img/galerias/tones/7.jpg',
		'thumb': '/img/galerias/tones/miniaturas/7.jpg'
	 },
	 {
	 'src': '/img/galerias/tones/8.jpg',
		'thumb': '/img/galerias/tones/miniaturas/8.jpg'
	 },
	 {
	 'src': '/img/galerias/tones/9.jpg',
		'thumb': '/img/galerias/tones/miniaturas/9.jpg'
	 }

				]
			})

});
//  rukill
$('#rukill2-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
		{
		'src': '/img/galerias/rukil/1.jpg',
		 'thumb': '/img/galerias/rukil/miniaturas/1.jpg'
		},
		{
		'src': '/img/galerias/rukil/2.jpg',
		 'thumb': '/img/galerias/rukil/miniaturas/2.jpg'
		},
		{
		'src': '/img/galerias/rukil/3.jpg',
		 'thumb': '/img/galerias/rukil/miniaturas/3.jpg'
		},
		{
		'src': '/img/galerias/rukil/4.jpg',
		 'thumb': '/img/galerias/rukil/miniaturas/4.jpg'
		},
		{
		'src': '/img/galerias/rukil/5.jpg',
		 'thumb': '/img/galerias/rukil/miniaturas/5.jpg'
	 },
	 {
	 'src': '/img/galerias/rukil/6.jpg',
		'thumb': '/img/galerias/rukil/miniaturas/6.jpg'
	 }

				]
			})

});
// flores
$('#flores-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
				{
				'src': '/img/galerias/flores/1.jpg',
				 'thumb': '/img/galerias/flores/miniaturas/1.jpg'
				},
				{
				'src': '/img/galerias/flores/2.jpg',
				 'thumb': '/img/galerias/flores/miniaturas/2.jpg'
				},
				{
				'src': '/img/galerias/flores/3.jpg',
				 'thumb': '/img/galerias/flores/miniaturas/3.jpg'
				},
				{
				'src': '/img/galerias/flores/4.jpg',
				 'thumb': '/img/galerias/flores/miniaturas/4.jpg'
				}


				]
			})

});
// antonio
$('#antonio-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
			{
			'src': '/img/galerias/antonio/1.jpg',
			 'thumb': '/img/galerias/antonio/miniaturas/1.jpg'
			},
			{
			'src': '/img/galerias/antonio/2.jpg',
			 'thumb': '/img/galerias/antonio/miniaturas/2.jpg'
			},
			{
			'src': '/img/galerias/antonio/3.jpg',
			 'thumb': '/img/galerias/antonio/miniaturas/3.jpg'
			},
			{
			'src': '/img/galerias/antonio/4.jpg',
			 'thumb': '/img/galerias/antonio/miniaturas/4.jpg'
			},
			{
			'src': '/img/galerias/antonio/5.jpg',
			 'thumb': '/img/galerias/antonio/miniaturas/5.jpg'
			},
			{
			'src': '/img/galerias/antonio/6.jpg',
			 'thumb': '/img/galerias/antonio/miniaturas/6.jpg'
			}



				]
			})

});
// francis
$('#francis-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
					{
					'src': '/img/galerias/francis/1.jpg',
					 'thumb': '/img/galerias/francis/miniaturas/1.jpg'
					},
					{
					'src': '/img/galerias/francis/2.jpg',
					 'thumb': '/img/galerias/francis/miniaturas/2.jpg'
					},
					{
					'src': '/img/galerias/francis/3.jpg',
					 'thumb': '/img/galerias/francis/miniaturas/3.jpg'
					},
					{
					'src': '/img/galerias/francis/4.jpg',
					 'thumb': '/img/galerias/francis/miniaturas/4.jpg'
					},
					{
					'src': '/img/galerias/francis/5.jpg',
					 'thumb': '/img/galerias/francis/miniaturas/5.jpg'
					}

				]
			})

});
// leavy
$('#leavy-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
					{
					'src': '/img/galerias/leavy/1.jpg',
					 'thumb': '/img/galerias/leavy/miniaturas/1.jpg'
					},
					{
					'src': '/img/galerias/leavy/2.jpg',
					 'thumb': '/img/galerias/leavy/miniaturas/2.jpg'
					}


				]
			})

});
// cris
$('#cris-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
					{
					'src': '/img/galerias/cris/1.jpg',
					 'thumb': '/img/galerias/cris/miniaturas/1.jpg'
					},
					{
					'src': '/img/galerias/cris/2.jpg',
					 'thumb': '/img/galerias/cris/miniaturas/2.jpg'
					},
					{
					'src': '/img/galerias/cris/3.jpg',
					 'thumb': '/img/galerias/cris/miniaturas/3.jpg'
					},
					{
					'src': '/img/galerias/cris/4.jpg',
					 'thumb': '/img/galerias/cris/miniaturas/4.jpg'
					},
					{
					'src': '/img/galerias/cris/5.jpg',
					 'thumb': '/img/galerias/cris/miniaturas/5.jpg'
					}

				]
			})

});
// somos
$('#somos-gallery').on('click', function() {

			$(this).lightGallery({
					dynamic: true,
					dynamicEl: [
						{
						'src': '/img/galerias/somos/1.jpg',
						 'thumb': '/img/galerias/somos/miniaturas/1.jpg'
						},
						{
						'src': '/img/galerias/somos/2.jpg',
						 'thumb': '/img/galerias/somos/miniaturas/2.jpg'
						},
						{
						'src': '/img/galerias/somos/3.jpg',
						 'thumb': '/img/galerias/somos/miniaturas/3.jpg'
						},
						{
						'src': '/img/galerias/somos/4.jpg',
						 'thumb': '/img/galerias/somos/miniaturas/4.jpg'
						},
						{
						'src': '/img/galerias/somos/5.jpg',
						 'thumb': '/img/galerias/somos/miniaturas/5.jpg'
					 },
					 {
					 'src': '/img/galerias/somos/6.jpg',
						'thumb': '/img/galerias/somos/miniaturas/6.jpg'
					 },
					 {
					 'src': '/img/galerias/somos/7.jpg',
						'thumb': '/img/galerias/somos/miniaturas/7.jpg'
					 },
					 {
					 'src': '/img/galerias/somos/8.jpg',
						'thumb': '/img/galerias/somos/miniaturas/8.jpg'
					 }

				]
			})

});


// videos
$('#video-principal, #video-galeria, #fruzi-video, #damy-video, #arce-video, #chus-video, #variadito-video,#manjares-video, #mari-video, #cevichon-video,#tex-video, #vere-video, #heladin-video, #mariela-video, #francis-video, #leavy-video, #cris-video, #somos-video, #flores-video, #antonio-video, #bendicion-video, #pansa-video, #tones-video, #rukill2-video, #vivero-video, #tex2-video, #ana-video').lightGallery({
  loadYoutubeThumbnail: false,
});
