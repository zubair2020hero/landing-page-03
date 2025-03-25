(function ($) {
    "use strict";

    //---------- Header Mainmenu [active]
    $(".za-header-mainmunu ul li").click(function () {
        $(".za-header-mainmunu ul li").removeClass("active");
        $(this).addClass("active");
    });

    //---------- Header btn [active]
    $(".za-header-btn .btn01").click(function (e) {
        e.preventDefault();
        $(".za-header-btn .btn01").removeClass("active");
        $(this).addClass("active");
    });

    //---------- Header Sticky
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

    //---------- Mobile Menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    //---------- Sidebar Js [Menu]
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
    //-------- Location start
    const wrapper = $(".za-select-wrapper"),
        selectBtn = wrapper.find(".select-btn"),
        searchInp = wrapper.find("input"),
        options = wrapper.find(".options");

    // array of some countries 
    let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan", "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia", "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan", "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

    function addCountry(selectedCountry) {
        options.empty();
        $.each(countries, function (index, country) {
            let isSelected = (country === selectedCountry) ? "selected" : "";
            options.append(`<li class="${isSelected}" onclick="updateName(this)">${country}</li>`);
        });
    }

    addCountry();

    window.updateName = function (selectedLi) {
        searchInp.val("");
        addCountry($(selectedLi).text());
        wrapper.removeClass("active");
        selectBtn.find("span").text($(selectedLi).text());
    };

    searchInp.on("keyup", function () {
        let searchedVal = searchInp.val().toLowerCase();
        let filteredCountries = countries.filter(function (data) {
            return data.toLowerCase().startsWith(searchedVal);
        });

        if (filteredCountries.length > 0) {
            options.empty();
            $.each(filteredCountries, function (index, country) {
                options.append(`<li onclick="updateName(this)">${country}</li>`);
            });
        } else {
            options.html("<p>Oops! Country not found</p>");
        }
    });

    selectBtn.on("click", function () {
        wrapper.toggleClass("active");
    });

    // Close the dropdown if clicked outside the wrapper (non-select area)
    $(document).on("click", function (e) {
        if (!$(e.target).closest(wrapper).length && !$(e.target).is(selectBtn)) {
            wrapper.removeClass("active");
        }
    });

    //-------- Location end
    
    //-------- Datepicker start
    // Date start  we are initializing the calendar popup
    $('.datepicker-input').each(function (index) {
        let currentDate = new Date();
        let selectedDate = null;
        let $datepicker = $(this);
        let calendarId = `#calendar-${index + 1}`; // Dynamically reference the calendar div
        let monthYearId = `#month-year-${index + 1}`;
        let prevMonthId = `#prev-month-${index + 1}`;
        let nextMonthId = `#next-month-${index + 1}`;
        let calendarDays = `${calendarId} .calendar-days`;

        // Function to update calendar
        function updateCalendar() {
            let month = currentDate.getMonth();
            let year = currentDate.getFullYear();
            let firstDay = new Date(year, month, 1).getDay();
            let lastDate = new Date(year, month + 1, 0).getDate();
            let today = new Date();

            $(monthYearId).text(`${currentDate.toLocaleString('default', { month: 'long' })} ${year}`);
            $(calendarDays).empty();

            // Creating empty spaces for the first day of the month
            for (let i = 0; i < firstDay; i++) {
                $(calendarDays).append('<span class="empty"></span>');
            }

            // Creating day elements for the calendar
            for (let day = 1; day <= lastDate; day++) {
                let dayElement = $('<span>').text(day);
                let dayDate = new Date(year, month, day);

                // Mark today with a different style
                if (dayDate.toDateString() === today.toDateString()) {
                    dayElement.addClass('today');
                }

                // Highlight selected date
                if (selectedDate && dayDate.toDateString() === selectedDate.toDateString()) {
                    dayElement.addClass('selected');
                }

                dayElement.click(function () {
                    selectedDate = dayDate;
                    let formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
                    $datepicker.val(formattedDate); // Set selected date to input
                    $(calendarId).hide(); // Hide calendar popup
                    updateCalendar(); // Re-render calendar to highlight selected date
                });

                $(calendarDays).append(dayElement);
            }
        }

        // Show calendar when input is clicked
        $datepicker.click(function () {
            $(calendarId).toggle();
            updateCalendar();
        });

        // Hide calendar if clicked outside
        $(document).click(function (e) {
            if (!$(e.target).closest(calendarId).length && !$(e.target).is($datepicker)) {
                $(calendarId).hide();
            }
        });

        // Navigation to previous month
        $(prevMonthId).click(function () {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendar();
        });

        // Navigation to next month
        $(nextMonthId).click(function () {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendar();
        });
    });

    //---------- Datepicker End

    //---------- data bg img 
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    })

    //---------- Testimonial
    $('.testimonial-active').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    });

    //---------- Faq
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