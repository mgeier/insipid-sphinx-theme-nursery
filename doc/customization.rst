Customization
=============

If you want to go beyond :doc:`configuration`, you've come to the right page!


Custom CSS files
----------------

Adding your own CSS files is very easy.
Just add their file names to :confval:`html_css_files`
and make sure they are living in a directory
that's part of :confval:`html_static_path`.

For example, if the path to your CSS file is :file:`_static/funky.css`
(relative to your :file:`conf.py`), you can use something like this:

.. code-block:: python

    html_css_files = ['funky.css']
    html_static_path = ['_static']


Custom Templates
----------------

...

:confval:`templates_path`

.. code-block:: python

    templates_path = ['_templates']

New templates ...

:confval:`html_sidebars`
:theme-option:`left_buttons`
:theme-option:`right_buttons`

Modify existing templates ...

.. todo::

   relbar1, relbar2, ...

See also :doc:`templating`.


Derive Your Own Theme
---------------------

:doc:`theming`

...

.. code-block:: ini
    :name: derived-theme-conf
    :caption: Starting point for your own :file:`theme.conf`

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
