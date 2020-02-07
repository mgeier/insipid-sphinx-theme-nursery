$(document).ready(function () {
    'use strict';
    var root = $(':root');
    var body = $(document.body);
    var sidebar = $('.sphinxsidebar');
    var sidebarToggle = $('#sidebar-toggle');

    function store(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
        }
    }

    sidebarToggle.on('click', function () {
        if (body.hasClass('sidebar-hidden')) {
            showSidebar();
        } else if (body.hasClass('sidebar-visible')) {
            hideSidebar();
        }
    });

    function showSidebar() {
        body.removeClass('sidebar-hidden');
        body.addClass('sidebar-visible');
        /*
        Array.from(sidebarLinks).forEach(function (link) {
            link.setAttribute('tabIndex', 0);
        });
        */
        sidebarToggle.attr('aria-expanded', true);
        sidebar.attr('aria-hidden', false);
        store('sphinx-sidebar', 'visible');
    }

    function hideSidebar() {
        body.removeClass('sidebar-visible');
        body.addClass('sidebar-hidden');
        /*
        Array.from(sidebarLinks).forEach(function (link) {
            link.setAttribute('tabIndex', -1);
        });
        */
        sidebarToggle.attr('aria-expanded', false);
        sidebar.attr('aria-hidden', true);
        store('sphinx-sidebar', 'hidden');
    }

    $('#sidebar-resize-handle').on('mousedown', function (e) {
        $(window).on('mousemove', resize);
        $(window).on('mouseup', stopResize);
        body.addClass('sidebar-resizing');
        return false;  // Prevent unwanted text selection while resizing
    });

    function resize(e) {
        root.css('--sidebar-width', (e.clientX - sidebar.offset().left) + 'px');
    }

    function stopResize(e) {
        body.removeClass('sidebar-resizing');
        $(window).off('mousemove', resize);
        $(window).off('mouseup', stopResize);
        store('sphinx-sidebar-width', root.css('--sidebar-width'));
    }

    // This is part of the sidebar code because it only affects the sidebar
    if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                let height;
                if(entry.borderBoxSize) {
                    height = entry.borderBoxSize.blockSize;
                } else {
                    height = entry.contentRect.height;
                }
                root.css('--topbar-height', height + 'px');
            }
        });
        resizeObserver.observe(document.getElementById('topbar-placeholder'));
    }

    // TODO: use only on READTHEDOCS
    // Scroll away readthedocs.org versions
    var scrollee = $('#scroll-container');
    var rtd_badge = $('.rst-versions.rst-badge');
    $(document.body).on('scroll', function (e) {
        rtd_badge.offset().left = scrollee.offset().left;
    });
});
