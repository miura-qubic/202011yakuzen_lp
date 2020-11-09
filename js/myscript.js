
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {
	$("body").removeClass("preload");
	// JQueryの範囲

	$(window).on('load resize', function () {
		var swiper01, swiper02, swiper03, swiper04, swiper05, swiper06, swiper07, swiper08, swiperMain;

		swiper01 = new Swiper('.top04 .item01 .slider .swiper-container', {
			loop: true,
			speed: 1000,
			slidesPerView: 1,
			centeredSlides : true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: true
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
			pagination: {
				el: '.top04 .item02 .slider .swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		});
	});



});