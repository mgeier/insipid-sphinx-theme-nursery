$(document).ready(function () {
    'use strict';

    var scroller = document.scrollingElement;

    // scroll to top
    $('.menu-title').on('click', function () {
        scroller.scrollTo({top: 0, behavior: 'smooth'});
    });

    // auto-hide topbar
    var menu = $('#topbar-container');
    var previous = scroller.scrollTop;
    $(document).on('scroll', function () {
        if (menu.hasClass('folded') && scroller.scrollTop < previous) {
            menu.removeClass('folded');
        } else if (!menu.hasClass('folded') && scroller.scrollTop > previous) {
            menu.addClass('folded');
        }
        previous = Math.max(scroller.scrollTop, 0);
    });

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
