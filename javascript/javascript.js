$(function () {

    checkTop();

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass('change');

    });

    $(window).resize(function () {
        checkTop();
    });

    function checkTop() {
        if ($(window).outerWidth() < 768) {
            $(".navbar-nav").css("width", "100%");
        } else {
            $(".navbar-nav").css("width", "70%");
        }
    }


    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,

        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 5,
    //     spaceBetween: 30,
    //     loop:true,
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //   });


});