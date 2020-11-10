
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	// const openMenu = document.getElementById('menu_open');
	// const Nav = document.querySelector('header nav');

	// openMenu.addEventListener('click', function () {
	// 	openMenu.classList.toggle('active');
	// 	Nav.classList.toggle('active');
	// });
}


$(function () {
	$("body").removeClass("preload");
	// JQueryの範囲

	
	
	
});

$(window).on('load resize', function () {
	var swiper01, swiper02, swiper03, swiper04, swiper05, swiper06, swiper07, swiper08, swiper09, swiper10;

	swiper01 = new Swiper('.top04 .item01 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top04 .item01 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper02 = new Swiper('.top04 .item02 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top04 .item02 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper03 = new Swiper('.top04 .item03 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top04 .item03 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
	
	swiper04 = new Swiper('.top04 .item04 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top04 .item04 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper05 = new Swiper('.top05 .item01 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top05 .item01 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper06 = new Swiper('.top05 .item02 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top05 .item02 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper07 = new Swiper('.top05 .item03 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top05 .item03 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper08 = new Swiper('.top06 .item01 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top06 .item01 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper09 = new Swiper('.top06 .item02 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top06 .item02 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	swiper10 = new Swiper('.top07 .item01 .slider .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 1,
		centeredSlides : true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		breakpoints: {
			1025: {
				slidesPerView: 1.6,
				spaceBetween: 30,
			},
			767: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		pagination: {
			el: '.top07 .item01 .slider .swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
});