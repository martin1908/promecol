(function ($) {
	"use strict";
	/*--/ Star metis menu /--*/
	$("#menu-a").metisMenu();

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Carousel owl /--*/
	$('#carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ['<i class="ion-chevron-left" aria-hidden="true"></i>', '<i class="ion-chevron-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true
	});
	/*--/ Animate Carousel /--*/
	$('.section-slider').on('translate.owl.carousel', function () {
		$('.carosuel-caption .carousel-title').removeClass('zoomIn animated').hide();
		$('.carosuel-caption .carousel-text, .carosuel-caption .carousel-link').removeClass('fadeInUp animated').hide();
	});

	$('.section-slider').on('translated.owl.carousel', function () {
		$('.carosuel-caption .carousel-title').addClass('zoomIn animated').show();
		$('.carosuel-caption .carousel-text, .carosuel-caption .carousel-link').addClass('fadeInUp animated').show();
	});

	/*--/ Team owl /--*/
	$('#team').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Project owl /--*/
	$('#project-photo').owlCarousel({
		margin: 0,
		loop: true,
		autoplay: true,
		nav: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: ['<i class="ion-arrow-left-c" aria-hidden="true"></i>', '<i class="ion-arrow-right-c" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ Testimonials owl /--*/
	$('#testimonial').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/* Testimonials owl */
	$('#testimonial2').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 1,
			}
		}
	});

	/*--/ Menu /--*/
	var cont = 1;
	$(".menub").on("click", function () {
		if (cont == 1) {
			$('nav').animate({
				left: '0',
			});
			cont = 0;
		} else {
			cont = 1;
			$('nav').animate({
				left: '-100%',
			});
		}
	});
})(jQuery);