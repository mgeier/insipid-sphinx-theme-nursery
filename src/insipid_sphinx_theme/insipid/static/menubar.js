"use strict";

(function scrollToTop () {
    var menuTitle = document.querySelector('.menu-title');

    menuTitle.addEventListener('click', function () {
        document.scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

(function autoHideMenu() {
    var menu = document.getElementById('menu-bar');

    var previousScrollTop = document.scrollingElement.scrollTop;

    document.addEventListener('scroll', function () {
        if (menu.classList.contains('folded') && document.scrollingElement.scrollTop < previousScrollTop) {
            menu.classList.remove('folded');
        } else if (!menu.classList.contains('folded') && document.scrollingElement.scrollTop > previousScrollTop) {
            menu.classList.add('folded');
        }

        if (!menu.classList.contains('bordered') && document.scrollingElement.scrollTop > 0) {
            menu.classList.add('bordered');
        }

        if (menu.classList.contains('bordered') && document.scrollingElement.scrollTop === 0) {
            menu.classList.remove('bordered');
        }

        previousScrollTop = Math.max(document.scrollingElement.scrollTop, 0);
    }, { passive: true });
})();