$(document).ready(function () {
    'use strict';

    var body = $(document.body);
    var main_scroller = document.scrollingElement;

    body.removeClass('loading');

    // TODO: only when in the middle of the page:
    // scroll to top
    $('.menu-title').on('click', function () {
        main_scroller.scrollTo({top: 0, behavior: 'smooth'});
    });

    var hash_changed = false;

    $(window).on('hashchange', function () {
        hash_changed = true;
    });

    // auto-hide topbar
    function scroll_callback(scroller) {
        var previous = scroller.scrollTop;
        return function () {
            const folded = body.hasClass('topbar-folded');
            const diff = scroller.scrollTop - previous;
            if (folded && scroller.scrollTop === 0) {
                body.removeClass('topbar-folded');
            } else if (hash_changed) {
                // Don't change folded state after jumping to a section
                hash_changed = false;
            } else if (folded && diff < 0) {
                body.removeClass('topbar-folded');
            } else if (!folded && diff > 0) {
                body.addClass('topbar-folded');
            }
            previous = Math.max(scroller.scrollTop, 0);
        };
    }

    $(document).on('scroll', scroll_callback(main_scroller));

    var sidebar_scroller = document.querySelector('.sphinxsidebar');
    if (sidebar_scroller) {
        $(sidebar_scroller).on('scroll', scroll_callback(sidebar_scroller));
    }

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
