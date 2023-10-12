let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.headerNav');
let bod = document.querySelector('.navWrap');

hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('isactive');
	menu.classList.toggle('active');
	bod.classList.toggle('navBg')
});