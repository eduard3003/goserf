$(function () {

    $('.header-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left " src="images/arrows-left.svg" alt="arrows"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right " src="images/arrows-rigth.svg" alt="arrows"></img>',
        asNavFor: '.slider-dots'
    });
    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header-slider',
    });


});