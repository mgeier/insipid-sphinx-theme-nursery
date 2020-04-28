Customization
=============

Theme Settings
--------------

:confval:`html_theme_options`

.. code-block:: python
    :caption: A simple ``conf.py``

    html_theme = 'insipid'
    html_theme_options = {
        'body_centered': False,
        'breadcrumbs': True,
        'navbar_top': False,
    }

You can also have a look at the :download:`conf.py` of this documentation.


``insipid`` Settings
^^^^^^^^^^^^^^^^^^^^

.. theme-option:: body_centered

    Set to ``False`` if you want the body text to be left-aligned.

    If :theme-option:`body_max_width` is ``None``, this will have no effect.

.. theme-option:: breadcrumbs

    Set to ``True`` to show breadcrumb navigation at the top of each page.

.. theme-option:: left_buttons

    List of templates to use on the left side of the title bar.

.. theme-option:: navbar_top

    Set to ``False`` to disable previous/back links at the top of the page

.. theme-option:: navbar_bottom

    Set to ``False`` to disable previous/back links at the bottom of the page

.. theme-option:: right_buttons

    List of templates to use on the right side of the title bar.

.. theme-option:: rightsidebar

    Set to ``True`` if you want to move the sidebar from the left to the right.

.. theme-option:: show_insipid

    Set to ``False`` to hide the "Insipid Theme" link in the footer.
    If :confval:`html_show_sphinx` is ``False``, this has no effect.

.. theme-option:: sidebar_transition

    CSS animation for showing/hiding the sidebar.

.. theme-option:: strip_section_numbers

    Section numbers (if you use them at all) are by default removed from
    previous/next links and from the title bar.
    Set to ``False`` to show them.

.. theme-option:: topbar_transition

    CSS animation for showing/hiding the title bar.


``basic`` Settings
^^^^^^^^^^^^^^^^^^

Settings inherited from the ``basic`` theme (like most Sphinx themes)

:ref:`builtin-themes`

https://github.com/sphinx-doc/sphinx/blob/master/sphinx/themes/basic/theme.conf

TODO: some default values are overwritten


.. theme-option:: body_max_width
    
    Maximal width of the body text (in pixels or any CSS unit).
    Set it to ``None`` for unlimited width.

.. theme-option:: body_min_width

    When the body text is narrower than this value (in pixels or any CSS unit),
    e.g. on a smartphone, it will be covered by sidebar.

.. theme-option:: globaltoc_collapse

    If ``True`` (the default), only the current section of the table of contents
    (TOC) is expanded.
    Set to ``False`` to expand everything.

.. theme-option:: globaltoc_includehidden

    If ``True``, include sections from :rst:dir:`sphinx:toctree` directives
    with the ``:hidden:`` flag.

.. theme-option:: navigation_with_keys

    Use left and right arrow keys to turn pages.

.. theme-option:: nosidebar

    Set to ``True`` to completely disable the sidebar.

.. theme-option:: sidebarwidth

    Width of the sidebar (in pixels or any CSS unit).


.. todo:: body_min_width doesn't count padding, body_max_width does


Default Values
^^^^^^^^^^^^^^

For default values, see
:download:`theme.conf <../src/insipid_sphinx_theme/insipid/theme.conf>`:

.. literalinclude:: ../src/insipid_sphinx_theme/insipid/theme.conf
    :name: theme-conf
    :caption: ``insipid/theme.conf``
    :language: ini


Sphinx Settings
---------------

.. confval:: html_context

    :confval:`sphinx:html_context`

.. confval:: html_copy_source

    :confval:`sphinx:html_copy_source`

.. confval:: html_show_sourcelink

    :confval:`sphinx:html_show_sourcelink`

    Bitbucket/Gitlab/Github support if :confval:`html_copy_source` is ``False``.

    Should work automatically on https://readthedocs.org/.

    For manual use:

    ::

        html_context = {
            'display_gitlab': True,
            'gitlab_repo': 'myrepo',
            'gitlab_user': 'myuser',
            'conf_py_path': '/path/to/doc/',
            'commit': '123abc',
        }

.. confval:: html_sidebars

    :confval:`sphinx:html_sidebars`

.. confval:: html_theme_options

    :confval:`sphinx:html_theme_options`


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
