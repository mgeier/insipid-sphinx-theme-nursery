Code Blocks
===========

https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#showing-code-examples


Literal Blocks
--------------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#literal-blocks

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#literal-blocks


This is a code sample::

    print('Hello, world!')


``code-block`` Directive
------------------------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-code-block

.. code-block:: python3
    :name: code1

    print('Hello, world!')

No language:

.. code-block:: none

    ┌─┬┐  ╔═╦╗  ╓─╥╖  ╒═╤╕
    │ ││  ║ ║║  ║ ║║  │ ││
    ├─┼┤  ╠═╬╣  ╟─╫╢  ╞═╪╡
    └─┴┘  ╚═╩╝  ╙─╨╜  ╘═╧╛
    ┌───────────────────┐
    │  ╔═══╗ Some Text  │▒
    │  ╚═╦═╝ in the box │▒
    ╞═╤══╩══╤═══════════╡▒
    │ ├──┬──┤           │▒
    │ └──┴──┘           │▒
    └───────────────────┘▒
     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒


``:linenos:`` option:

.. code-block:: python
    :linenos:

    print('Hello,')
    print('world!')

``:linenos:`` with ``:lineno-start:``:

.. code-block:: python
    :linenos:
    :lineno-start: 12345

    print('Hello,')
    print('world!')

``:emphasize-lines:``

.. code-block:: python
    :emphasize-lines: 3,5

    def some_function():
        interesting = False
        print('This line is highlighted.')
        print('This one is not...')
        print('...but this one is.')

``:emphasize-lines:`` and ``:linenos:``:

.. code-block:: python
    :linenos:
    :emphasize-lines: 3,5

    def some_function():
        interesting = False
        print('This line is highlighted.')
        print('This one is not...')
        print('...but this one is.')

``:caption:``:

.. code-block:: python
    :caption: This is a caption
    :name: code2

    print('Hello, world!')

``:caption:`` and ``:linenos:``:

.. code-block:: python
    :caption: This is another caption
    :name: code3
    :linenos:

    print('Hello,')
    print('world!')

See also *[source]* link in :mod:`insipid_sphinx_theme`.

.. todo:: Link directly to module source code?


``parsed-literal`` Directive
----------------------------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#parsed-literal

.. parsed-literal::

    Code block with *inline* markup.

Doctest Blocks
--------------

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#doctest-blocks

This is an ordinary paragraph.

>>> print('this is a Doctest block')
this is a Doctest block

The following is a literal block::

    >>> This is not recognized as a doctest block by
    reStructuredText.  It *will* be recognized by the doctest
    module, though!
