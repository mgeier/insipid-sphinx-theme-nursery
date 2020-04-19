Some text before the first section title.

Sections
========

Header Level 2
--------------

Header Level 3
^^^^^^^^^^^^^^

Header Level 4
''''''''''''''

Header Level 5
~~~~~~~~~~~~~~

Header Level 6
++++++++++++++

Only levels down to ``<h6>`` are typically supported.

Header Level 2
--------------

Text.

Header Level 3
^^^^^^^^^^^^^^

Text.

Header Level 4
''''''''''''''

Text.

Header Level 5
~~~~~~~~~~~~~~

Text.

Header Level 6
++++++++++++++

Text.


Rubric
------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#rubric

.. rubric:: Title of the Rubric

Some text.

.. note::

    .. rubric:: Rubric in admonition

.. topic:: Topic

    .. rubric:: Rubric in topic

.. sidebar:: Sidebar

    .. rubric:: Rubric in sidebar


(Local) Table of Contents
-------------------------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#table-of-contents

.. contents:: Table of Contents


Nested ``toctree``
------------------

.. toctree::

    nested document


Another Top-Level Section
=========================

It is uncommon
-- and a bit weird --
to have multiple top-level sections in the same source file.


Subsection
----------

Another nested document:

.. toctree::

    another-nested-document
