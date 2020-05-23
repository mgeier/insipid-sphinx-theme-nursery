$(document).ready(function () {
    'use strict';

    // make sure all scripts are re-executed when navigating to cached page
    window.onunload = function () {};

    var $body = $(document.body);

    var $topbar = $('#topbar');

    const threshold = 10;

    // auto-hide topbar
    function scroll_callback(scroller) {
        var ignore_scroll = true;
        var initial;
        var scroll_timeout;
        return function () {
            window.clearTimeout(scroll_timeout);
            var current = scroller.scrollTop;
            if (current <= $topbar.height() || (scroller.scrollHeight - current - scroller.clientHeight) < (scroller.clientHeight / 3)) {
                $body.removeClass('topbar-folded');
                ignore_scroll = true;
                return;
            } else if (ignore_scroll) {
                // We ignore single jumps
                ignore_scroll = false;
                initial = current;
            } else if (current - initial > threshold) {
                $body.addClass('topbar-folded');
                ignore_scroll = true;
                return;
            } else if (current - initial < -threshold) {
                $body.removeClass('topbar-folded');
                ignore_scroll = true;
                return;
            }
            scroll_timeout = setTimeout(function() {
                ignore_scroll = true;
            }, 66);
        };
    }

    $(document).on('scroll', scroll_callback(document.scrollingElement));

    var sidebar_scroller = document.querySelector('.sphinxsidebar');
    if (sidebar_scroller) {
        $(sidebar_scroller).on('scroll', scroll_callback(sidebar_scroller));
    }

    var div_body = document.querySelector('div.body');
    var first_section = document.querySelector('div.body .section');
    if (first_section) {
        $(document).on('scroll', function () {
            if (window.pageYOffset >= div_body.offsetTop + first_section.offsetTop) {
                $body.addClass('scrolled');
            } else {
                $body.removeClass('scrolled');
            }
        });
        $(document).scroll();
    }


    // show search
    var $form = $('#searchform');
    var $icon = $('#search-toggle');
    $icon.on('click', function () {
        try {
            // https://readthedocs-sphinx-search.readthedocs.io/
            showSearchModal();
            return;
        } catch(e) {}
        if ($form.is(':hidden')) {
            $form.show();
            $icon.attr('aria-expanded', 'true');
            $('#searchbar').focus();
        } else {
            $form.hide();
            $icon.attr('aria-expanded', 'false');
        }
    });

    if (document.fullscreenEnabled) {
        var $fullscreen = $('#fullscreen');
        $fullscreen.click(function() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
            $fullscreen.blur();
        });
    } else {
        $('#fullscreen').remove();
    }
});
