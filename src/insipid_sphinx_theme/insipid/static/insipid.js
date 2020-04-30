$(document).ready(function () {
    'use strict';

    var body = $(document.body);
    var main_scroller = document.scrollingElement;

    body.removeClass('loading');

    var scroll_timeout;
    var ignore_scroll = true;

    // auto-hide topbar
    function scroll_callback(scroller) {
        var previous = scroller.scrollTop;
        return function () {
            window.clearTimeout(scroll_timeout);
            if (scroller.scrollTop === 0) {
                body.removeClass('topbar-folded');
            } else if (ignore_scroll) {
                // We ignore single jumps
                ignore_scroll = false;
            } else if (scroller.scrollTop - previous > 0) {
                body.addClass('topbar-folded');
            } else {
                body.removeClass('topbar-folded');
            }
            previous = Math.max(scroller.scrollTop, 0);
            scroll_timeout = setTimeout(function() {
                ignore_scroll = true;
            }, 66);
        };
    }

    $(document).on('scroll', scroll_callback(main_scroller));

    var sidebar_scroller = document.querySelector('.sphinxsidebar');
    if (sidebar_scroller) {
        $(sidebar_scroller).on('scroll', scroll_callback(sidebar_scroller));
    }

    var title = $('#menu-title');
    var div_body = document.querySelector('div.body');
    var first_section = document.querySelector('div.body .section');

    $(document).on('scroll', function () {
        if (window.pageYOffset >= div_body.offsetTop + first_section.offsetTop) {
            body.addClass('scrolled');
        } else {
            body.removeClass('scrolled');
        }
    });

    // Force #menu-title update
    $(document).scroll();

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

    if (document.fullscreenEnabled) {
        $('#fullscreen').click(function() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
    } else {
        $('#fullscreen').remove();
    }
});
