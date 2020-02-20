$(document).ready(function () {
    'use strict';

    var body = $(document.body);
    var main_scroller = document.scrollingElement;
    var sidebar_scroller = document.querySelector('.sphinxsidebar');

    // scroll to top
    $('.menu-title').on('click', function () {
        main_scroller.scrollTo({top: 0, behavior: 'smooth'});
    });

    // auto-hide topbar
    function scroll_callback(scroller) {
        var previous = scroller.scrollTop;
        return function () {
            var folded = body.hasClass('topbar-folded');
            if (folded && scroller.scrollTop < previous) {
                body.removeClass('topbar-folded');
            } else if (!folded && scroller.scrollTop > previous) {
                body.addClass('topbar-folded');
            }
            previous = Math.max(scroller.scrollTop, 0);
        };
    }
    var scroll_main = scroll_callback(main_scroller);
    $(document).on('scroll', function () {
        // Avoid hiding the topbar on small screens if sidebar is open
        if (body.css('overflow-y') === 'visible') {
            scroll_main();
        }
    });
    $(sidebar_scroller).on('scroll', scroll_callback(sidebar_scroller));

    // show search
    var form = $('#searchform');
    var icon = $('#search-toggle');
    icon.on('click', function () {
        if (form.hasClass('hidden')) {
            form.removeClass('hidden');
            icon.attr('aria-expanded', 'true');
            $('#searchbar').focus();
        } else {
            form.addClass('hidden');
            icon.attr('aria-expanded', 'false');
        }
    });
});
