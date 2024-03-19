if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

// eslint-disable-next-line no-undef
$(function () {
    "use strict";

    // main sidebar toggle js
    // eslint-disable-next-line no-undef
    $('.menu-toggle').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.sidebar').toggleClass('open');
        // eslint-disable-next-line no-undef
        $('.open').removeClass('sidebar-mini');
    });

    // layout a sidebar mini version
    // eslint-disable-next-line no-undef
    $('.sidebar-mini-btn').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.sidebar').toggleClass('sidebar-mini');
        // eslint-disable-next-line no-undef
        $('.sidebar-mini').removeClass('open');
    });

    // chat page chatlist toggle js
    // eslint-disable-next-line no-undef
    $('.chatlist-toggle').on('click', function () {
        // eslint-disable-next-line no-undef
        $('.card-chat').toggleClass('open');
    });
    // eslint-disable-next-line no-undef
    $(".theme-rtl input").on('change', function () {
        if (this.checked) {
            // eslint-disable-next-line no-undef
            $("body").addClass('rtl_mode');
        } else {
            // eslint-disable-next-line no-undef
            $("body").removeClass('rtl_mode');
        }

    });

    // cSidebar overflow daynamic height

    overFlowDynamic();
    // eslint-disable-next-line no-undef
    $(window).resize(function () {
        overFlowDynamic();
    });

    function overFlowDynamic() {
        // eslint-disable-next-line no-undef
        var sideheight = $(".sidebar.sidebar-mini").height() + 48;

        if (sideheight <= 760) {
            // eslint-disable-next-line no-undef
            $(".sidebar.sidebar-mini").css("overflow", "scroll");
        }
        else {
            // eslint-disable-next-line no-undef
            $(".sidebar.sidebar-mini").css("overflow", "visible");
        }
    }


    // Dropdown scroll hide using table responsive
    // eslint-disable-next-line no-undef
    $('.table-responsive').on('show.bs.dropdown', function () {
        // eslint-disable-next-line no-undef
        $('.table-responsive').css("overflow", "inherit");
    });
    // eslint-disable-next-line no-undef
    $('.table-responsive').on('hide.bs.dropdown', function () {// eslint-disable-next-line no-undef
        $('.table-responsive').css("overflow", "auto");
    })

    // main theme color setting js
    // eslint-disable-next-line no-undef
    $('.choose-skin li').on('click', function () {// eslint-disable-next-line no-undef
        const $body = $('body');// eslint-disable-next-line no-undef
        const $this = $(this);// eslint-disable-next-line no-undef
        const existTheme = $('.choose-skin li.active').data('theme');// eslint-disable-next-line no-undef
        $('.choose-skin li').removeClass('active');
        $this.addClass('active');
        $body.attr('data-mytask', 'theme-' + $this.data('theme'));
    });

    // Monochrome Mode
    // eslint-disable-next-line no-undef
    // $('.monochrome-toggle input:checkbox').on('click', function () {// eslint-disable-next-line no-undef
    //     if ($(this).is(":checked")) {// eslint-disable-next-line no-undef
    //         $('body').addClass("monochrome");
    //     } else {// eslint-disable-next-line no-undef
    //         $('body').removeClass("monochrome");
    //     }
    // });

    // light and dark theme setting js
    var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    var toggleHcSwitch = document.querySelector('.theme-high-contrast input[type="checkbox"]');
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
        if (currentTheme === 'high-contrast') {
            toggleHcSwitch.checked = true;  
            toggleSwitch.checked = false;
        }
    }
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');// eslint-disable-next-line no-undef
            $('.theme-high-contrast input[type="checkbox"]').prop("checked", false);
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);
    // end
});

// live support team js
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6051a040f7ce18270930e55a/1f3d4os21';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();




