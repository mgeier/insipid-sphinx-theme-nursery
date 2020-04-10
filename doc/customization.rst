Customization
=============

Theme Settings
--------------

:confval:`html_theme_options`

.. code-block::
    :caption: conf.py

    html_theme_options = {
        'body_centered': False,
        'navbar_top': False,
    }

Settings from ``insipid`` theme:

.. option:: rightsidebar

    ...

...

Settings inherited from the ``basic`` theme (like most Sphinx themes):

.. option:: body_max_width

    ``None`` to disable

.. option:: body_min_width

    ...

.. option:: navigation_with_keys

    Use left and right arrow keys to turn pages

.. option:: nosidebar

    ...

.. option:: sidebarwidth

    ...

:ref:`builtin-themes`

https://github.com/sphinx-doc/sphinx/blob/master/sphinx/themes/basic/theme.conf

TODO: some default values are overwritten

TODO: body_min_width doesn't count padding, body_max_width does

For default values, see
:download:`theme.conf <../src/insipid_sphinx_theme/insipid/theme.conf>`:

.. literalinclude:: ../src/insipid_sphinx_theme/insipid/theme.conf
    :name: theme-conf
    :caption: theme.conf
    :language: ini


Sphinx Settings
---------------

.. confval:: html_sidebars

    :confval:`sphinx:html_sidebars`

.. confval:: html_theme_options

    :confval:`sphinx:html_theme_options`
