(function ($) {
    "use strict";

    // 01. Button
    $('.za-btn').on('click', function(){
        $('.za-btn.active').removeClass('active');
        $(this).addClass('active');
    });

    // 01. Mobile Menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    // 02. Sidebar Js
    $(".za-menu-toggle").on("click", function () {
        $(".za-sidebar-menu").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });

    $(".sidebar-close").on("click", function () {
        $(".za-sidebar-menu").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
        $(".za-sidebar-menu").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    // 03. Testimonial
    $('.testimonial-active').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    });

    //04. Faq
    $(".za-faq-text li").on("click", function (e) {
        let clickedLi;
        if ($(e.target).hasClass("za-question-arrow")) {
            clickedLi = $(e.target).parent();
        } else {
            clickedLi = $(e.target).closest("li");
        }
        $(".za-faq-text li").not(clickedLi).removeClass("showAnswer");
        clickedLi.toggleClass("showAnswer");
    });

})(jQuery);