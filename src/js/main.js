$(document ).ready(function() {

    if ($('.main-slider').length){
        const MainSlider = new Swiper('.main-slider', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.main-slider .swiper-pagination',
            },
        });
    }

    $(window).scroll(function(){
        $('.header').toggleClass('moved', $(this).scrollTop() > 50);
    });



    $(".menu-item-has-children", "#category-menu").hover(
        function() {
            $(this).find(".sub-menu").fadeIn(300);
        },
        function() {
            $(this).find(".sub-menu").fadeOut(300);
        }
    );

    if ($('.explore').length){
        // var ExploreSlider = new Swiper('.explore .explore__list', {
        //     slidesPerView: 'auto',
        //     spaceBetween: 30,
        //     initialSlide: 1,
        //     breakpoints: {
        //         1100: {
        //             slidesPerView: 'auto',
        //             spaceBetween: 30,
        //         },
        //         300: {
        //             slidesPerView: 1,
        //             spaceBetween: 20,
        //         },
        //     },
        // })

        $('.explore .explore__wrapper').slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });
    }

    // if ($('.about-author').length){
    //
    //     window.onload = function () {
    //         CalculateAuthor();
    //     }
    //     function CalculateAuthor(){
    //         var BoxHeight = $(".footer").outerHeight();
    //         var intViewportHeight = $(window).height();
    //         var NeedHeight = intViewportHeight - BoxHeight;
    //         $(".about-author").height(NeedHeight);
    //     }
    //     $( window ).resize(function() {
    //         CalculateAuthor();
    //     });
    // }



});