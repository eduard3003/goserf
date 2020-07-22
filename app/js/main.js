$(function () {

    $('.header-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left " src="images/arrows-left.svg" alt="arrows"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right " src="images/arrows-rigth.svg" alt="arrows"></img>',
        asNavFor: '.slider-dotshead'
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header-slider',
    });

    $('.serf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left " src="images/arrows-left.svg" alt="arrows"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right " src="images/arrows-rigth.svg" alt="arrows"></img>',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf-slider',
        focusOnSelect: true,
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left " src="images/arrows-left.svg" alt="arrows"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right " src="images/arrows-rigth.svg" alt="arrows"></img>',
    });


});