Example
=======

TODO

Text ``Monospace`` *Emphasis* **Bold**.

.. code:: python

    print('Hello, world!')

Text

.. code::

    no highlighting


Admonitions
-----------

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

----

https://docutils.sourceforge.io/docs/ref/rst/directives.html#generic-admonition

.. admonition:: Admonition title with `link <Admonitions>`_

    Admonition text.

----

https://docutils.sourceforge.io/docs/ref/rst/directives.html#topic

.. topic:: Topic title

    Topic text.

----

https://www.sphinx-doc.org/en/master/extdev/nodes.html#new-admonition-like-constructs

.. seealso::

    https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-seealso

.. versionadded:: 3.14

    Added something: https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-versionadded


Nesting
^^^^^^^

.. note::

    .. warning::

        This is a warning.

        .. note::

            Inner note text.

        This is the warning again.

.. note::

    .. code::

        'code in note'

.. warning::

    .. code::

        'code in warning'

.. note::

    * bullet point in admonition

.. note::

    #. ordered list item in admonition
