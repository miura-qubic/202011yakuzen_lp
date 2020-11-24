
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
	// var swiper01 = new Swiper('.top04 .item01 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top04 .item01 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper02 = new Swiper('.top04 .item02 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top04 .item02 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper03 = new Swiper('.top04 .item03 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top04 .item03 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });
	
	// var swiper04 = new Swiper('.top04 .item04 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top04 .item04 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper05 = new Swiper('.top05 .item01 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top05 .item01 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper06 = new Swiper('.top05 .item02 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top05 .item02 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper07 = new Swiper('.top05 .item03 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top05 .item03 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper08 = new Swiper('.top06 .item01 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top06 .item01 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper09 = new Swiper('.top06 .item02 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top06 .item02 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// var swiper10 = new Swiper('.top07 .item01 .slider .swiper-container', {
	// 	loop: true,
	// 	speed: 1000,
	// 	slidesPerView: 1,
	// 	centeredSlides : true,
	// 	autoplay: {
	// 		delay: 5000,
	// 		disableOnInteraction: true
	// 	},
	// 	breakpoints: {
	// 		1025: {
	// 			slidesPerView: 1.6,
	// 			spaceBetween: 30,
	// 		},
	// 		767: {
	// 			slidesPerView: 1,
	// 			spaceBetween: 0,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: '.top07 .item01 .slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true
	// 	}
	// });

	// スムーススクロール 
	// var headerHeight = $('header').outerHeight();
	// var urlHash = location.hash;
	// if (urlHash) {
	// 	$('body,html').stop().scrollTop(0);
	// 	setTimeout(function () {
	// 		var target = $(urlHash);
	// 		var position = target.offset().top - headerHeight;
	// 		$('body,html').stop().animate({ scrollTop: position }, 500);
	// 	}, 100);
	// }
	// $('a[href^="#"]').click(function () {
	// 	var href = $(this).attr("href");
	// 	var target = $(href);
	// 	var position = target.offset().top - headerHeight;
	// 	$('body,html').stop().animate({ scrollTop: position }, 500);
	// });

	$('a[href^="#"]').click(function () {
		var speed = 300;
		if(w > spwidth){
			var header = 100;
		}else{
			var header = 0;
		}
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({ scrollTop: position - header }, speed, "swing");
		return false;
	}); 
});