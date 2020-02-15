$(document).ready(function () {
    'use strict';

    var body = $(document.body);
    var scroller = document.scrollingElement;

    // scroll to top
    $('.menu-title').on('click', function () {
        scroller.scrollTo({top: 0, behavior: 'smooth'});
    });

    // auto-hide topbar
    var previous = scroller.scrollTop;
    $(document).on('scroll', function () {
        console.log(scroller.scrollTop);
        var folded = body.hasClass('topbar-folded');
        if (folded && scroller.scrollTop < previous) {
            body.removeClass('topbar-folded');
        } else if (!folded && scroller.scrollTop > previous) {
            body.addClass('topbar-folded');
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
