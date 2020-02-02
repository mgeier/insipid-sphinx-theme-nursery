"use strict";

(function scrollToTop() {
    var menuTitle = document.querySelector('.menu-title');

    menuTitle.addEventListener('click', function () {
        document.scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

(function autoHideTopbar() {
    var menu = document.getElementById('topbar-container');

    var previousScrollTop = document.scrollingElement.scrollTop;

    document.addEventListener('scroll', function () {
        if (menu.classList.contains('folded') && document.scrollingElement.scrollTop < previousScrollTop) {
            menu.classList.remove('folded');
        } else if (!menu.classList.contains('folded') && document.scrollingElement.scrollTop > previousScrollTop) {
            menu.classList.add('folded');
        }
        previousScrollTop = Math.max(document.scrollingElement.scrollTop, 0);
    }, { passive: true });
})();

(function search(search) {
    var searchform = document.getElementById('searchform');
    var searchbar = document.getElementById('searchbar');
    var searchicon = document.getElementById('search-toggle');

    searchicon.addEventListener('click', function(e) { searchIconClickHandler(); }, false);
    
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
            searchbar.select();
        } else {
            showSearch(false);
        }
    }

    /*
    // Show search box if there are previous results
    if ($.getQueryParameters().highlight) {
        searchform.classList.remove('hidden');
    }
    */
})();
