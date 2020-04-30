Customization
=============

Custom CSS files
----------------

...

:confval:`html_css_files`


Custom Templates
----------------

...

:confval:`templates_path`


Derive Your Own Theme
---------------------

:doc:`theming`

...

.. code-block:: ini
    :name: derived-theme-conf
    :caption: Starting point for your own ``theme.conf``

    [theme]
    inherit = insipid
    stylesheet = ???.css
    sidebars = ???.html, ???.html, ???.html
    pygments_style = ???

    [options]
    left_buttons = ???.html, ???.html
    right_buttons = ???.html

    breadcrumbs = true
    navbar_top = false

    your_own_option1 = 4em
    your_own_option2 = true

    # and so on and so on ...

.. todo:: describe CSS file, import insipid.css?
