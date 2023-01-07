'use strict'

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev')

// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	loop: true,
// 	// Navigation arrows
// 	navigation: {
// 		nextEl: next,
// 		prevEl: prev,
// 	},
// });


// const burgerBtn = document.querySelector('.burger-desctop__btn');
// const burgerMenuDesc = document.querySelector('.burger-desctop')
// burgerBtn.addEventListener('click', (e) => {
// 	burgerBtn.classList.toggle('active');
// 	burgerMenuDesc.classList.toggle('open');
// })



const tabsLink = document.querySelectorAll('.tabs__title-link');
const tabsBody = document.querySelectorAll('.tabs__body');



tabsLink.forEach(el => {
	el.addEventListener('click', () => {

		tabsBody.forEach(el => {
			el.classList.remove('active')
		});
		const content = document.querySelector('#' + el.dataset.tab);
		content.classList.add('active');

		tabsLink.forEach(el => {
			el.classList.remove('active')
		});

		el.classList.add('active')

	})
})

