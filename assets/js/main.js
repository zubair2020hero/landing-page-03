(function ($) {
    "use strict";

    // 01. Header Mainmenu [active]
    $(".za-header-mainmunu ul li").click(function () {
        $(".za-header-mainmunu ul li").removeClass("active");
        $(this).addClass("active");
    });

    // 02. Header btn [active]
    $(".za-header-btn .btn01").click(function (e) {
        e.preventDefault();
        $(".za-header-btn .btn01").removeClass("active");
        $(this).addClass("active");
    });

    //03. Header Sticky
    if ($("#za-header-area").length > 0) {
        $(window).on("scroll", function (event) {
            var scroll = $(window).scrollTop();
            if (scroll < 1) {
                $(".za-header-area").removeClass("za-sticky");
            } else {
                $(".za-header-area").addClass("za-sticky");
            }
        });
    }

    //04. Mobile Menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });
    //----------------
    // 01. Mobile Menu
    // $('#mobile-menu').meanmenu({
    //     meanMenuContainer: '.mobile-menu',
    //     meanScreenWidth: "1199",
    //     meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    // });

    // 02. Sidebar Js
    $(".za-header-toggle").on("click", function () {
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