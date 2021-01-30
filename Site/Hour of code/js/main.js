const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
$(document).ready(function () {
    $toggleCollapse = $('.toggle-collapse');
    $nav = $('.nav');
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        autoplay: false,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        responsive: responsive
    });
    AOS.init();
});