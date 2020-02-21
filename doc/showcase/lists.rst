Lists
=====

https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#lists-and-quote-like-blocks


Bullet Lists
------------

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#bullet-lists

- This is the first bullet list item.  The blank line above the
  first list item is required; blank lines between list items
  (such as below this paragraph) are optional.

- This is the first paragraph in the second item in the list.

  This is the second paragraph in the second item in the list.
  The blank line above this paragraph is required.  The left edge
  of this paragraph lines up with the paragraph above, both
  indented relative to the bullet.

  - This is a sublist.  The bullet lines up with the left edge of
    the text blocks above.  A sublist is a new list so requires a
    blank line above and below.

- This is the third item of the main list.

This paragraph is not part of the list.


Enumerated Lists
----------------

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#enumerated-lists

1. Item 1 initial text.

   a) Item 1a.
   b) Item 1b.

2. a) Item 2a.
   b) Item 2b.


Definition Lists
----------------

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#definition-lists

term 1
    Definition 1.

term 2
    Definition 2, paragraph 1.

    Definition 2, paragraph 2.

term 3 : classifier
    Definition 3.

term 4 : classifier one : classifier two
    Definition 4.


Glossary
--------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#glossary

Example link: :term:`source directory` (term will be highlighted).

.. glossary::

   environment
      A structure where information about all documents under the root is
      saved, and used for cross-referencing.  The environment is pickled
      after the parsing stage, so that successive runs only need to read
      and parse new and changed documents.

   source directory
      The directory which, including its subdirectories, contains all
      source files for one Sphinx project.

.. glossary::

   term 1
   term 2
      Definition of both terms.

.. glossary::

   term 3 : A
   term 4 : B
      Definition of both terms.


Field Lists
-----------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#rst-field-lists

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#field-lists

:Date: 2001-08-16
:Version: 1
:Authors: - Me
          - Myself
          - I
:Indentation: Since the field marker may be quite long, the second
   and subsequent lines of the field body do not have to line up
   with the first line, but they must be indented relative to the
   field name marker, and they must line up with each other.
:Parameter i: integer


Option Lists
------------

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#option-lists

-a         Output all.
-b         Output both (this description is
           quite long).
-c arg     Output just arg.
--long     Output all day long.

-p         This option has two paragraphs in the description.
           This is the first.

           This is the second.  Blank lines may be omitted between
           options (as above) or left in (as here and below).

--very-long-option  A VMS-style option.  Note the adjustment for
                    the required two spaces.

--an-even-longer-option
           The description can also start on the next line.

-2, --two  This option has two variants.

-f FILE, --file=FILE  These two options are synonyms; both have
                      arguments.

/V         A VMS/DOS-style option.


Grammars
--------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#grammar-production-displays

Example link: :token:`try_stmt`.

.. productionlist::
    try_stmt: try1_stmt | try2_stmt
    try1_stmt: "try" ":" `suite`
             : ("except" [`expression` ["," `target`]] ":" `suite`)+
             : ["else" ":" `suite`]
             : ["finally" ":" `suite`]
    try2_stmt: "try" ":" `suite`
             : "finally" ":" `suite`
