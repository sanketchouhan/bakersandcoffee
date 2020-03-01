$(document).ready(function () {
    if ($(window).scrollTop() > 0) {
        navbarToTop();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            navbarToTop();
        } else {
            $(".navbar").css({
                "padding": "2rem 10vw",
                "background-color": "transparent"
            });
        }
    })

    function navbarToTop() {
        $(".navbar").css({
            "padding": "1rem 10vw",
            "background-color": "#181a1b"
        });
    }
});