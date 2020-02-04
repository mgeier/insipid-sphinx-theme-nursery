Customization
=============

Theme Settings
--------------

``html_theme_options``

Settings inherited from the ``basic`` theme (like most Sphinx themes):

.. code-block::
    :caption: conf.py

    html_theme_options = {
        'nosidebar': True,
        'sidebarwidth': 230,
        'body_min_width': 450,
        'body_max_width': 800,  # None to disable
        'navigation_with_keys': True,  # Use left and right arrow keys to turn pages
    }

Settings from ``insipid`` theme::

    # TODO:

    'codefont': 'monospace',

See :download:`theme.conf <../src/insipid_sphinx_theme/insipid/theme.conf>`.

.. literalinclude:: ../src/insipid_sphinx_theme/insipid/theme.conf
    :name: theme-conf
    :caption: theme.conf
    :language: ini

Sphinx Settings
---------------

TODO

