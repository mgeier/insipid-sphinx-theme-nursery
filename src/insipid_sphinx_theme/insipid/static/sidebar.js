"use strict";

$(document).ready(function () {
    var sidebar = document.querySelector(".sphinxsidebar");
    var sidebarToggleButton = document.getElementById("sidebar-toggle");
    var sidebarResizeHandle = document.getElementById("sidebar-resize-handle");

    function showSidebar() {
        document.body.classList.remove('sidebar-hidden')
        document.body.classList.add('sidebar-visible');
        /*
        Array.from(sidebarLinks).forEach(function (link) {
            link.setAttribute('tabIndex', 0);
        });
        */
        sidebarToggleButton.setAttribute('aria-expanded', true);
        sidebar.setAttribute('aria-hidden', false);
        try { localStorage.setItem('sphinx-sidebar', 'visible'); } catch (e) { }
    }

    function hideSidebar() {
        document.body.classList.remove('sidebar-visible')
        document.body.classList.add('sidebar-hidden');
        /*
        Array.from(sidebarLinks).forEach(function (link) {
            link.setAttribute('tabIndex', -1);
        });
        */
        sidebarToggleButton.setAttribute('aria-expanded', false);
        sidebar.setAttribute('aria-hidden', true);
        try { localStorage.setItem('sphinx-sidebar', 'hidden'); } catch (e) { }
    }

    sidebarToggleButton.addEventListener('click', function sidebarToggle() {
        if (document.body.classList.contains("sidebar-hidden")) {
            showSidebar();
        } else if (document.body.classList.contains("sidebar-visible")) {
            hideSidebar();
        /*
        } else {
            if (getComputedStyle(sidebar)['transform'] === 'none') {
                hideSidebar();
            } else {
                showSidebar();
            }
        */
        }
    });

    sidebarResizeHandle.addEventListener('mousedown', initResize, false);

    function initResize(e) {
        window.addEventListener('mousemove', resize, false);
        window.addEventListener('mouseup', stopResize, false);
        document.body.classList.add('sidebar-resizing');
    }

    function resize(e) {
        document.documentElement.style.setProperty('--sidebar-width', (e.clientX - sidebar.offsetLeft) + 'px');
    }

    function stopResize(e) {
        document.body.classList.remove('sidebar-resizing');
        window.removeEventListener('mousemove', resize, false);
        window.removeEventListener('mouseup', stopResize, false);
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
                document.documentElement.style.setProperty('--topbar-height', height + 'px');
            }
        });
        resizeObserver.observe(document.getElementById('topbar-placeholder'));
    }
});
