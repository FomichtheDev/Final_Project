$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ''],

        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 2
            }
        }
    });

});
$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});