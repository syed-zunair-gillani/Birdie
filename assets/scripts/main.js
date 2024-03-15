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
	  centerPadding: '0%',
	  slidesToShow: 2,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  dots: false,
	  arrows:false,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0%',
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0%',
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


