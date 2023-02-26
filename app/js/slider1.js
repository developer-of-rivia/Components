$(document).ready(function () {

    // слайдер
    $('.slider__object').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        centerMode: true,
        variableWidth: true,
        //appendArrows: $('.slider__nav'),
        prevArrow: '<button class="slick-prev example__slider-prev" aria-label="Previous" type="button"><img src="img/arrow-left.png"></button>',
        nextArrow: '<button class="slick-next example__slider-next" aria-label="Next" type="button"><img src="img/arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrow: true,
                }
            },
        ]
    });
	
});


console.log('daa');