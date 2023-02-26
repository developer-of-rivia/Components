$(document).ready(function () {

    let burgerIcon = document.querySelector('.burger-icon__bars-svg');
    let CloseIcon = document.querySelector('.burger-icon__bars-svg');
    let menu = document.querySelector('.menu');

    burgerIcon.addEventListener('click', function(){
        menu.classList.add('menu--open');
    })
	
});