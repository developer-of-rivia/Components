$(document).ready(function () {

    let burgerIcon = document.querySelector('.burger-icon');
    let closeIcon = document.querySelector('.menu__close');
    let menu = document.querySelector('.menu');

    
    burgerIcon.addEventListener('click', function(){
        menu.classList.add('menu--open');
    })
    closeIcon.addEventListener('click', function(){
        menu.classList.remove('menu--open');
    })
	
});