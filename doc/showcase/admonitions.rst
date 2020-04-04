Admonitions
===========

Specific Admonitions
--------------------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions

In many themes only ``note`` and ``warning`` are supported!

.. attention::

    Attention text and ``inline code``.

.. caution::

    Caution text and ``inline code``.

.. danger::

    Danger text and ``inline code``.

.. error::

    Error text and ``inline code``.

.. hint::

    Hint text and ``inline code``.

.. important::

    Important text and ``inline code``.

.. note::

    Note text and ``inline code``.

.. tip::

    Tip text and ``inline code``.

.. warning::

    Warning text and ``inline code``.


Generic Admonitions
-------------------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#generic-admonition

.. admonition:: Admonition title with `link <Admonitions>`_ and ``code``

    Admonition text and ``inline code``.


Topic
-----

https://docutils.sourceforge.io/docs/ref/rst/directives.html#topic

.. topic:: Topic title

    Topic text and ``inline code``.


Sidebar
-------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#sidebar

.. sidebar:: Sidebar Title
    :subtitle: Sidebar Subtitle

    Sidebar text.

    .. rubric:: A rubric

    More text.

Text after ``sidebar`` directive.


Admonition-like Constructs
--------------------------

https://www.sphinx-doc.org/en/master/extdev/nodes.html#new-admonition-like-constructs

.. seealso:: https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-seealso
    and ``some inline code``

.. seealso::

    Text.

    Module :mod:`insipid_sphinx_theme`
        Documentation of the :mod:`insipid_sphinx_theme` module.

    `Sphinx Documentation <https://www.sphinx-doc.org/>`_
        Documentation for Sphinx.

.. versionadded:: 3.14

    https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-versionadded

.. versionchanged:: 3.14

    https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-versionchanged

.. deprecated:: 3.14

    https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-deprecated


Nesting
-------

.. note::

    .. warning::

        This is a warning.

        .. note::

            Inner note text.

        This is the warning again.

.. note::

    .. code-block::

        'code in note'

    Some text.

    .. code-block::

        'some more code'

.. warning::

    .. code-block::

        'code in warning'

.. note::

    * bullet point in admonition

.. note::

    #. ordered list item in admonition

A table in a note:

.. note::

    =====  =====  =======
      A      B    A and B
    =====  =====  =======
    False  False  False
    True   False  False
    False  True   False
    True   True   True
    =====  =====  =======
