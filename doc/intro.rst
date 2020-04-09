Introduction
============

inspired by (i.o.w. ripped off of) ...

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
