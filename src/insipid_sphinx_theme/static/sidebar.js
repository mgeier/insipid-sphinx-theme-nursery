"use strict";

(function sidebar() {
    var sidebar = document.querySelector(".sphinxsidebar");
    var sidebarResizeHandle = document.getElementById("sidebar-resize-handle");

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
})();
