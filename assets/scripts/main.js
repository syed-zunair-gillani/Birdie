jQuery( document ).ready( function ( $ ) {
	if ( typeof $.mmenu === 'function' ) {
		$( '#nav' ).mmenu( {
			offCanvas: {
				position: 'right',
			},
		}, {
			clone: true,
		} );
	}
	
	// Slider
	$('.sliderholder').slick({
	  centerMode: true,
	  centerPadding: '15%',
	  slidesToShow: 3,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  dots: true,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '15%',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '15%',
			slidesToShow: 1
		  }
		}
	  ]
	});
	
	$(".faq").on("click", function() {
		
		$(this).toggleClass("open");
		$(".answer",this).slideToggle();
		
		
	})
	
} );


