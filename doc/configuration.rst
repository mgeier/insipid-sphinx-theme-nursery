Configuration
=============

There is only a single required setting in your :file:`conf.py`:

.. code-block:: python

    html_theme = 'insipid'


Theme Settings
--------------

The ``insipid`` theme has many configuration parameters
which can be specified with :confval:`html_theme_options`
in your :file:`conf.py`,
for example like this:

.. code-block:: python
    :caption: A simple :file:`conf.py`
    :name: conf-py-simple

    html_theme = 'insipid'
    html_theme_options = {
        'body_centered': False,
        'breadcrumbs': True,
    }

You can also have a look at the `example`_ below.

All available theme options are listed in the following sections.


``insipid`` Settings
^^^^^^^^^^^^^^^^^^^^

The following settings are provided by the ``insipid`` theme.
See below for `default values`_.

.. theme-option:: body_centered

    Set to ``False`` if you want the body text to be left-aligned.

    If :theme-option:`body_max_width` is ``None``, this has no effect.

.. theme-option:: breadcrumbs

    Set to ``True`` to show breadcrumb navigation
    (including a "home" button)
    at the top of each page.

.. theme-option:: left_buttons

    List of templates to show on the left side of the title bar.

    You can use one of the built-in templates
    (ending with :file:`-button.html`):

    :gh-template:`search-button.html`
        A button to show/hide the search field.

        .. note::

            This is only shown if :confval:`html_sidebars`
            does *not* contain ``'searchbox.html'``.

    :gh-template:`fullscreen-button.html`
        A button to switch to fullscreen mode (and back again).

        .. note::

            This will only be shown if fullscreen mode is available.

    :gh-template:`repo-button.html`
        A Bitbucket/Gitlab/Github logo linking to the associated repository.

        .. note::

            If your docs are hosted on https://readthedocs.org/
            this should work automagically.
            If not, you'll have to provide some information
            via :confval:`html_context`::

                html_context = {
                    'display_gitlab': True,
                    'gitlab_user': 'myuser',
                    'gitlab_repo': 'myrepo',
                }

            Replace ``gitlab`` with ``bitbucket`` or ``github``
            if the repository containing your source files is
            hosted on Bitbucket or Github, respectively.

    :gh-template:`pdf-button.html`
        A link to the PDF version of your docs.

        .. note::

            If your docs are hosted on https://readthedocs.org/
            (and if you've enabled PDF builds)
            this should work automagically.
            If not, you'll have to provide the URL to the PDF file
            via :confval:`html_context`::

                html_context = {
                    'downloads': [
                        ('pdf', 'https://example.org/my-docs.pdf'),
                    ],
                }

    You can also create your own template file located in your
    :confval:`templates_path`.
    It's best to use ``<a>`` or ``<button type="button">`` elements.
    You can ``include`` other templates, most notably icons.

    For example, a "home" button could be made by creating a file
    named :file:`_templates/home-button.html`
    (relative to your :file:`conf.py`) with this content:

    .. code-block:: html+jinja

        <a href="{{ pathto('index') }}" title="{{ docstitle|e }}">
          {% include 'icons/home.svg' %}
        </a>

    ... and adding the file name to :confval:`html_theme_options`
    like this:

    .. code-block:: python

        html_theme_options = {
            'left_buttons': [
                'home-button.html',
            ],
        }
        templates_path = ['_templates']

    For help creating your own templates, see :doc:`templating`.

.. theme-option:: right_buttons

    List of templates to show on the right side of the title bar.

    .. seealso:: :theme-option:`left_buttons`

.. theme-option:: rightsidebar

    Set to ``True`` if you want to move the sidebar from the left to the right.

    .. seealso:: :theme-option:`nosidebar`, :confval:`html_sidebars`

.. theme-option:: show_insipid

    Set to ``False`` to hide the "Insipid Theme" link in the footer.

.. theme-option:: sidebar_transition

    Duration (and optional timing function) of the CSS transition effect
    for showing/hiding the sidebar.

.. theme-option:: strip_section_numbers

    Section numbers (if you use them at all) are by default removed from
    previous/next links and from the title bar.
    Set to ``False`` to show them.

.. theme-option:: topbar_transition

    Duration (and optional timing function) of the CSS transition effect
    for showing/hiding the title bar.


.. _basic settings:

``basic`` Settings
^^^^^^^^^^^^^^^^^^

The following settings are inherited from the basic__ theme
(therefore, most Sphinx themes have them),
but for some of the options, the `default values`_ have been changed.

__ https://github.com/sphinx-doc/sphinx/blob/master/
    sphinx/themes/basic/theme.conf


.. theme-option:: body_max_width
    
    Maximal width of the main document text (in pixels or any CSS unit).
    Set it to ``None`` for unlimited width.

.. theme-option:: body_min_width

    When the body text is narrower than this value (in pixels or any CSS unit),
    e.g. on a small mobile device,
    it will be (partially) covered by the sidebar.

    .. warning::

        To avoid problems on Chrome and derived browsers,
        this value should have the same unit as :theme-option:`sidebarwidth`.

.. theme-option:: globaltoc_collapse

    If ``True`` (the default), only the current section of the table of contents
    (TOC) in the sidebar is expanded.
    Set to ``False`` to expand everything.

.. theme-option:: globaltoc_includehidden

    If ``True``, include sections from :rst:dir:`sphinx:toctree` directives
    with the ``:hidden:`` flag in the table of contents (TOC) in the sidebar.

.. theme-option:: navigation_with_keys

    If ``True``, the left and right arrow keys can be used to turn pages.

    .. note::
        This is disabled by default in the ``basic`` theme
        (and therefore in most other themes as well),
        for reasons given in Sphinx PR `#2064`__.

        __ https://github.com/sphinx-doc/sphinx/pull/2064

        When using the ``insipid`` theme, however, this is enabled by default.

.. theme-option:: nosidebar

    Set to ``True`` to completely disable the sidebar.

    .. seealso:: :theme-option:`rightsidebar`, :confval:`html_sidebars`

.. theme-option:: sidebarwidth

    Width of the sidebar (in pixels or any CSS unit).

    .. note::

        Whenever the sidebar is resized,
        its new width is stored in the browser's "local storage".
        Therefore, a changed ``sidebarwidth`` might not be immediately visible.

    .. warning::

        To avoid problems on Chrome and derived browsers,
        this value should have the same unit as :theme-option:`body_min_width`.


Default Values
^^^^^^^^^^^^^^

For default values, see:

.. literalinclude:: ../src/insipid_sphinx_theme/insipid/theme.conf
    :name: theme-conf
    :caption: :file:`insipid/theme.conf`
    :linenos:
    :language: ini


Sphinx Settings
---------------

.. confval:: html_copy_source

    When :confval:`sphinx:html_copy_source` is ``True``
    (which is the default),
    all source files are copied to the HTML output directory
    (into the :file:`_sources` sub-directory).
    The string given by :confval:`html_sourcelink_suffix`
    is appended to each file name.

    .. note::

        This has to be set to ``False`` in order to show links
        to the source files on Bitbucket/Gitlab/Github,
        see :confval:`html_show_sourcelink`.

.. confval:: html_show_sourcelink

    When :confval:`sphinx:html_show_sourcelink` is ``True``
    (which is the default),
    a link to the source file of each page is shown in the footer.

    Traditionally, those links point to copies of the source files
    (when :confval:`html_copy_source` has its default value ``True``).

    However, when :confval:`html_copy_source` is ``False``,
    the ``insipid`` theme (via the :gh-template:`show-source.html` template)
    will show links to the appropriate version of the source files on
    Bitbucket/Gitlab/Github.

    .. note::

        This should work automagically if your docs are hosted
        on https://readthedocs.org/.
        If not, you have to manually provide the necessary information
        via :confval:`html_context`::

            html_context = {
                'display_gitlab': True,
                'gitlab_user': 'myuser',
                'gitlab_repo': 'myrepo',
                'conf_py_path': '/path/to/doc/',
                'commit': '123abc',
            }

        The example above shows settings for Gitlab.
        Replace ``gitlab`` with ``bitbucket`` or ``github``
        if the repository containing your source files is
        hosted on Bitbucket or Github, respectively.

        The ``commit`` value should contain the hash (or tag name)
        of the commit which was used to create the docs.

.. confval:: html_sidebars

    :confval:`sphinx:html_sidebars`

    .. seealso:: Theme options :theme-option:`rightsidebar` and
        :theme-option:`nosidebar`

.. confval:: html_theme_options

    :confval:`sphinx:html_theme_options`

.. confval:: language

    :confval:`sphinx:language`


Example
-------

You can look at the :file:`conf.py` file of this very documentation:

.. literalinclude:: conf.py
    :name: conf-py
    :caption: :file:`conf.py` of the *insipid* docs
    :linenos:
    :language: python
    :end-before: Get version information from Git
