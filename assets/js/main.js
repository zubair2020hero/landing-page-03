(function ($) {
    "use strict";

    var windowOn = $(window);

    // 01. preloader 
    windowOn.on('load', function () {
        $("#loading").fadeOut(500);
    })
    //----------

    // 02. back-to-top
    var btn = $('#back-to-top');
    windowOn.scroll(function () {
        if (windowOn.scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    //----------

    // 03. mobile menu
    let zaMenuHTML = $('.za-mobile-menu-active > ul').clone();
    let zaoffcanvasMenu = $('.za-offcanvas-menu > nav');

    zaoffcanvasMenu.append(zaMenuHTML);
    //------------

    // 04. Button
    $('.za-btn').on('click', function () {
        $('.za-btn.active').removeClass('active');
        $(this).addClass('active');
    });
    // ----------------------------------

    // 05. Slider
    // Slide and Dot selection
    let slides = $(".testimonial-slide");
    let totalSlides = slides.length;
    let currentIndex = 0;

    // Making Dots
    for (let i = 0; i < totalSlides; i++) {
        $(".dots").append("<span></span>");
    }

    // Function to show a slide
    function showSlide(index) {
        // Remove the active and behind classes of all slides.
        slides.removeClass("active behind");
        // Make current slide active.
        slides.eq(index).addClass("active");
        // Mark the next slide behind
        slides.eq((index + 1) % totalSlides).addClass("behind");

        // dots update
        $(".dots span").removeClass("active-dot");
        $(".dots span").eq(index).addClass("active-dot");

        // Reset arrow's active class
        $(".up-btn, .down-btn").removeClass("active-arrow");
    }

    // Showing the first slide
    showSlide(currentIndex);

    // Auto slide every 3 seconds
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        $(".down-btn").addClass("active-arrow");
    }, 3000);

    // Clicking the down arrow shows the next slide.
    $(".down-btn").click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        $(this).addClass("active-arrow");
    });

    // Clicking the up arrow shows the previous slide.
    $(".up-btn").click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        $(this).addClass("active-arrow");
    });
    // ----------------------------------
 
    // 06. header-language
    // Dropdown show/hide
    $(".za-lang-label > a").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); 

        let menu = $(".za-lang-select");

        if (menu.hasClass("d-none")) {
            menu.removeClass("d-none").hide().slideDown(200);
        } else {
            menu.slideUp(200, function () {
                menu.addClass("d-none");
            });
        }
    });

    // Language select
    $(".za-lang-select li a").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Close click event bubble

        let selectedLang = $(this).text().trim();

        // Placed in label (En → Bn → In etc.)
        let label = $(".za-lang-label > a");
        label.contents().filter(function () {
            return this.nodeType === 3; // text node
        })[0].nodeValue = selectedLang + " ";

        // Dropdown hide
        $(".za-lang-select").slideUp(200, function () {
            $(this).addClass("d-none");
        });
    });

    // When you click on Document, the dropdown hides.
    $(document).on("click", function () {
        $(".za-lang-select").slideUp(200, function () {
            $(this).addClass("d-none");
        });
    });
    // ----------------------------------  

})(jQuery);