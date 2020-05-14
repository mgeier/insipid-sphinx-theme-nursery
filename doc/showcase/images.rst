Images
======

Image
-----

https://docutils.sourceforge.io/docs/ref/rst/directives.html#image

https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#images

.. image:: insipid.png
    :alt: Example image showing the text "insipid Sphinx theme"

Text after "normal" image.

.. image:: insipid.png
    :alt: Example image showing the text "insipid Sphinx theme"
    :align: left

Text after left-aligned image.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.

.. image:: insipid.png
    :alt: Example image showing the text "insipid Sphinx theme"
    :align: right

Text after right-aligned image.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.


.. admonition:: Image in admonition

    .. image:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"
        :align: right


.. topic:: Image in topic

    .. image:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"
        :align: left


.. sidebar:: Image in sidebar

    .. image:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"

..

    Quoted image:

    .. image:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"
        :align: left


Scaled Image
------------

.. image:: insipid.png
    :scale: 300%


Figure
------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#figure

A link (needs numfig_): :numref:`fig-insipid`.

.. _numfig: https://www.sphinx-doc.org/en/master/usage/
    configuration.html#confval-numfig


.. figure:: insipid.png
    :name: fig-insipid
    :alt: Example image showing the text "insipid Sphinx theme"

    This is the caption of the figure.

Text after "normal" figure.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.
Some more text. Some more text.

.. figure:: insipid.png
    :alt: Example image showing the text "insipid Sphinx theme"
    :align: left

    This is the caption of the figure.

Text after left-aligned figure.

.. figure:: insipid.png
    :alt: Example image showing the text "insipid Sphinx theme"
    :align: right

    This is the caption of the figure.

Text after right-aligned figure.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.
Some more text.

.. admonition:: Figure in admonition

    .. figure:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"
        :align: right
    
        This is the caption of the figure.

.. topic:: Figure in topic

    .. figure:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"
        :align: left
    
        This is the caption of the figure.

.. sidebar:: Figure in sidebar

    .. figure:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"
    
        This is the caption of the figure.

..

    Quoted figure:

    .. figure:: insipid.png
        :alt: Example image showing the text "insipid Sphinx theme"
        :align: left
    
        This is the caption of the figure.


Scaled Figure
-------------

.. figure:: insipid.png
    :scale: 300%

    This is the caption of the figure.
