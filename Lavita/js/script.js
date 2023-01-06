'use strict'

const next = document.querySelector('.next');
const prev = document.querySelector('.prev')

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: next,
		prevEl: prev,
	},
});


const burgerBtn = document.querySelector('.burger-desctop__btn');
const burgerMenuDesc = document.querySelector('.burger-desctop')
burgerBtn.addEventListener('click', (e) => {
	burgerBtn.classList.toggle('active');
	burgerMenuDesc.classList.toggle('open');
})
