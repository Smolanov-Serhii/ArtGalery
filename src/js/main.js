$(document ).ready(function() {


    if ($('.main-page .new-collection, .page-single-product .new-collection').length){
        jQuery(document).ready(function() {
            const settings = {
                settings: "unslick",
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 10000,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 700,
                        arrows: false,
                        dots: true,
                        settings: { slidesToShow: 1 }
                    }
                ]
            };

            const sl =  $('.new-collection__list').slick(settings);

            $(window).on('resize', function() {
                if( $(window).width() <= 700 &&  !sl.hasClass('slick-initialized')) {
                    $('.new-collection__list').slick(settings);
                }
            });
        });
    }


    if ($('.main-slider').length){
        const MainSlider = new Swiper('.main-slider', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.main-slider .swiper-pagination',
            },
        });
    }

    if ($('.galey-slider').length){
        const MainSlider = new Swiper('.galey-slider', {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.galey-slider .swiper-pagination',
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

        $('.explore .explore__wrapper').slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            pauseOnHover: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 700,
                    slidesToShow: 1,
                    draggable: true,
                    autoplay: false,
                    swipeToSlide: true,
                    touchMove: true,
                    centerMode: false,
                    pauseOnHover: false,
                }
            ]
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

    if ($('.js-mobile-burger').length){
        $(".js-mobile-burger").click(function (){
            $('body').addClass('lock-body');
            $('.header-mobile__menu').addClass('active');
        });

        $(".js-button-close").click(function (){
            $('body').removeClass('lock-body');
            $('.header-mobile__menu').removeClass('active');
        });
    }

    if ($('.new-collection__sort').length){
        $(function() {
            $('.new-collection__sort select').selectric();
        });
    }

});