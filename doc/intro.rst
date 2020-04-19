Introduction
============

This Sphinx_ theme was very much inspired by (i.o.w. ripped off of) mdBook_
and -- to a lesser extent --
the similar-looking bookdown_ and (the legacy theme of) GitBook_.

Some ideas were taken from the Sphinx themes
sphinx_typlog_theme_ (https://readthedocs.org/ badge),
sphinx_material_ (previous/next arrows in navbar)
sphinx_rtd_theme_ (admonitions)
as well as websites like
Github_,
MDN_,
and many others.

A somewhat large list of freely available Sphinx themes can be found at
https://sphinx-themes.org/.


.. _Sphinx: https://www.sphinx-doc.org/
.. _mdBook: https://rust-lang.github.io/mdBook/
.. _bookdown: https://bookdown.org/
.. _GitBook: https://github.com/GitbookIO/theme-default/
.. _sphinx_typlog_theme: https://sphinx-typlog-theme.readthedocs.io/
.. _sphinx_material: https://github.com/bashtage/sphinx-material/
.. _sphinx_rtd_theme: https://sphinx-rtd-theme.readthedocs.io/
.. _Github: https://github.com/
.. _MDN: https://developer.mozilla.org/en-US/docs/Web


Goals
-----

boring
    no-nonsense, content first ...

configurable
    See :doc:`customization`.

mobile-friendly
    not *mobile-first* though ...

accessible
    help needed!

translatable
    ... use the language_ setting ...

    .. _language: https://www.sphinx-doc.org/en/master/usage/
        configuration.html#confval-language

support for right-to-left languages
    help needed!

optional JavaScript
    ...

support for *all* Sphinx features
    The largest part of this documentation is a showcase of (hopefully) all
    things that can be generated with Sphinx (aside from arbitrary "raw" HTML).
    If you find something that isn't supported (or not shown in the docs),
    please let us know!

support for RTD
    https://readthedocs.org/

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
