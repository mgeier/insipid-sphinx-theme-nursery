"use strict";

$(document).ready(function () {
    // scroll to top
    document.querySelector('.menu-title').addEventListener('click', function () {
        document.scrollingElement.scrollTo({top: 0, behavior: 'smooth'});
    });

    // auto-hide topbar
    var menu = document.getElementById('topbar-container');
    var previousScrollTop = document.scrollingElement.scrollTop;
    document.addEventListener('scroll', function () {
        if (menu.classList.contains('folded')
                && document.scrollingElement.scrollTop < previousScrollTop) {
            menu.classList.remove('folded');
        } else if (!menu.classList.contains('folded')
                && document.scrollingElement.scrollTop > previousScrollTop) {
            menu.classList.add('folded');
        }
        previousScrollTop = Math.max(document.scrollingElement.scrollTop, 0);
    }, { passive: true });

    // show search
    var searchform = document.getElementById('searchform');
    var searchicon = document.getElementById('search-toggle');
    searchicon.addEventListener('click', function(e) {
        searchIconClickHandler();
    }, false);
    function showSearch(yes) {
        if (yes) {
            searchform.classList.remove('hidden');
            searchicon.setAttribute('aria-expanded', 'true');
        } else {
            searchform.classList.add('hidden');
            searchicon.setAttribute('aria-expanded', 'false');
        }
    }
    function searchIconClickHandler() {
        if (searchform.classList.contains('hidden')) {
            showSearch(true);
            document.getElementById('searchbar').select();
        } else {
            showSearch(false);
        }
    }
});
