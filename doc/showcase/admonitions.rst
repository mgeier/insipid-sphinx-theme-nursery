Admonitions
===========

Specific Admonitions
--------------------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions

In many themes only ``note`` and ``warning`` are supported!

.. attention::

    Attention text.

.. caution::

    Caution text.

.. danger::

    Danger text.

.. error::

    Error text.

.. hint::

    Hint text.

.. important::

    Important text.

.. note::

    Note text.

.. tip::

    Tip text.

.. warning::

    Warning text.


Generic Admonitions
-------------------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#generic-admonition

.. admonition:: Admonition title with `link <Admonitions>`_

    Admonition text.


Topic
-----

https://docutils.sourceforge.io/docs/ref/rst/directives.html#topic

.. topic:: Topic title

    Topic text.


Admonition-like Constructs
--------------------------

https://www.sphinx-doc.org/en/master/extdev/nodes.html#new-admonition-like-constructs

.. seealso::

    https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-seealso

.. versionadded:: 3.14

    Added something: https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-versionadded


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
