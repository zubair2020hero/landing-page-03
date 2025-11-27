(function ($) {
    "use strict";

    // 01. Button
    $('.za-btn').on('click', function () {
        $('.za-btn.active').removeClass('active');
        $(this).addClass('active');
    });

    // 02. Slider
    // Slide এবং Dot নির্বাচন
    let slides = $(".testimonial-slide");
    let totalSlides = slides.length;
    let currentIndex = 0;

    // Dots তৈরি
    for (let i = 0; i < totalSlides; i++) {
        $(".dots").append("<span></span>");
    }

    // একটি slide দেখানোর ফাংশন
    function showSlide(index) {
        // সব slide এর active এবং behind ক্লাস সরানো
        slides.removeClass("active behind");
        // বর্তমান slide active করা
        slides.eq(index).addClass("active");
        // পরবর্তী slide behind হিসেবে চিহ্নিত করা
        slides.eq((index + 1) % totalSlides).addClass("behind");

        // dots update
        $(".dots span").removeClass("active-dot");
        $(".dots span").eq(index).addClass("active-dot");

        // arrow এর active ক্লাস রিসেট
        $(".up-btn, .down-btn").removeClass("active-arrow");
    }

    // প্রথম slide দেখানো
    showSlide(currentIndex);

    // Auto slide প্রতি 3 সেকেন্ডে
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        $(".down-btn").addClass("active-arrow");
    }, 3000);

    // Down arrow click করলে পরের slide দেখানো
    $(".down-btn").click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        $(this).addClass("active-arrow");
    });

    // Up arrow click করলে আগের slide দেখানো
    $(".up-btn").click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        $(this).addClass("active-arrow");
    });

    // // 01. Mobile Menu
    // $('#mobile-menu').meanmenu({
    //     meanMenuContainer: '.mobile-menu',
    //     meanScreenWidth: "1199",
    //     meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    // });

    // // 02. Sidebar Js
    // $(".za-menu-toggle").on("click", function () {
    //     $(".za-sidebar-menu").addClass("sidebar-opened");
    //     $(".body-overlay").addClass("opened");
    // });

    // $(".sidebar-close").on("click", function () {
    //     $(".za-sidebar-menu").removeClass("sidebar-opened");
    //     $(".body-overlay").removeClass("opened");
    // });

    // $(".body-overlay").on("click", function () {
    //     $(".za-sidebar-menu").removeClass("sidebar-opened");
    //     $(".body-overlay").removeClass("opened");
    // });

    // // 03. Testimonial
    // $('.testimonial-active').slick({
    //     // dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true,
    //     prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    //     nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    // });

    // //04. Faq
    // $(".za-faq-text li").on("click", function (e) {
    //     let clickedLi;
    //     if ($(e.target).hasClass("za-question-arrow")) {
    //         clickedLi = $(e.target).parent();
    //     } else {
    //         clickedLi = $(e.target).closest("li");
    //     }
    //     $(".za-faq-text li").not(clickedLi).removeClass("showAnswer");
    //     clickedLi.toggleClass("showAnswer");
    // });

})(jQuery);