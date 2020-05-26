Introduction
============

This Sphinx_ theme was very much inspired by (i.o.w. ripped off of) mdBook_.

Some further ideas were stolen from the Sphinx themes
sphinx_typlog_theme_ (https://readthedocs.org/ badge),
sphinx_material_ (previous/next arrows in navbar),
sphinx_rtd_theme_ (admonitions),
sphinx_book_theme_ (fullscreen button),
as well as websites like
Github_,
MDN_,
and many others.

If you don't like this theme, no problem,
you can find a large list of freely available Sphinx themes at
https://sphinx-themes.org/.


.. _Sphinx: https://www.sphinx-doc.org/
.. _mdBook: https://rust-lang.github.io/mdBook/
.. _sphinx_typlog_theme: https://sphinx-typlog-theme.readthedocs.io/
.. _sphinx_material: https://bashtage.github.io/sphinx-material/
.. _sphinx_rtd_theme: https://sphinx-rtd-theme.readthedocs.io/
.. _sphinx_book_theme: https://sphinx-book-theme.readthedocs.io/
.. _Github: https://github.com/
.. _MDN: https://developer.mozilla.org/en-US/docs/Web


Goals
-----

The following list has been driving the development of this theme.
Those are the *goals*, but that doesn't mean that any of them has been reached
(to a sufficient degree) yet.

If you have suggestions how to come closer to these goals,
please open an issue at https://github.com/mgeier/insipid-sphinx-theme/issues/.

boring
    The most important thing is your content.
    It shouldn't be outshined by some flashy theme.
    The theme is supposed to stay in the background and out of the way.

    This theme uses only very few fonts,
    very few (and quite dull) colors
    and just a handful of simple symbols.

    Most navigational tools can be hidden (and are in fact hidden by default),
    providing a maximum of screen real estate for
    and a minimum of distraction from your content.

accessible
    *Help needed!*
    There are some ``aria-label``\s here and there,
    but the accessibility could certainly be improved in many places.

mobile-friendly
    This theme should work fine on mobile devices.
    It isn't strictly *mobile-first* though,
    because there is a special sidebar behavior for narrow screens.
    Considerable care has been taken to make sure all the screen space is
    available for content and not obstructed by ornamental junk.

configurable
    The default settings should be perfectly fine for most people.
    But doesn't everyone sometimes like to be special?
    Many features can be switched on and off (see :doc:`configuration`),
    but thanks to Sphinx's great flexibility,
    you can fine-tune and individualize virtually every aspect of the theme,
    see :doc:`customization` for details.

support for right-to-left languages
    *Help needed!*
    For now, there are no special arrangements in place
    except for a measly :theme-option:`rightsidebar` theme option.

optional JavaScript
    Some features (like hiding/resizing navigational tools, search,
    fullscreen mode) require JavaScript.
    However, if JavaScript is disabled,
    all content should still be perfectly readable and the navigation on and
    between pages should still work reasonably well.

support for *all* Sphinx features
    The largest part of this documentation
    (starting at :doc:`showcase/index`)
    is a showcase of (hopefully) all
    things that can be generated with Sphinx (aside from arbitrary "raw" HTML).
    If you find something that isn't supported (or not shown in the docs),
    please let us know!

back to the ``basic``\s
    This theme is based on Sphinx's ``basic`` theme
    and only adds some hand-written HTML, CSS and JavaScript
    (sprinkled with a pinch of Jinja2_ markup).
    Plus a few SVG icons from `Font Awesome`_
    (embedded in the HTML files -- no external assets).
    No external JavaScript framework is used
    (except for jQuery_, which is already part of the ``basic`` theme),
    and no extension-specific Python code is ever executed
    (you can check the source code of :func:`insipid_sphinx_theme.setup`).

    .. _Jinja2: https://palletsprojects.com/p/jinja/
    .. _Font Awesome: https://fontawesome.com/
    .. _jQuery: https://jquery.com/


Features
--------

Trying not to disable existing Sphinx features.

auto-hiding topbar
    maximize (vertical) screen space, scroll to top, link to parent

resizable sidebar
    In addition to toggling its visibility,
    the width of the sidebar can also be interactively changed by users.

keyboard navigation
    left/right arrow keys, P/N/U/I/S/M

fullscreen mode
    reset when switching pages; "install" on home screen as fullscreen web app

translatable UI
    All strings used in the user interface (including ``aria-label``\s)
    are translatable and
    they will be automatically replaced by their translations
    when a supported :confval:`language` setting is used.

support for RTD
    https://readthedocs.org/; badge; Bitbucket/Github/GitLab links
