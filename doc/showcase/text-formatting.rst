Text Formatting
===============

Paragraphs
----------

http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus.  Nulla gravida orci a odio.  Nullam varius,
turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
sollicitudin mauris.  Integer in mauris eu nibh euismod gravida.  Duis ac tellus
et risus vulputate vehicula.  Donec lobortis risus a elit.  Etiam tempor.  Ut
ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt
sapien risus a quam.  Maecenas fermentum consequat mi.  Donec fermentum.
Pellentesque malesuada nulla a mi.  Duis sapien sem, aliquet nec, commodo eget,
consequat quis, neque.  Aliquam faucibus, elit ut dictum aliquet, felis nisl
adipiscing sapien, sed malesuada diam lacus eget erat.  Cras mollis scelerisque
nunc.  Nullam arcu.  Aliquam consequat.  Curabitur augue lorem, dapibus quis,
laoreet et, pretium ac, nisi.  Aenean magna nisl, mollis quis, molestie eu,
feugiat in, orci.  In hac habitasse platea dictumst.

----

After the line.


Compound Paragraphs
-------------------

https://docutils.sourceforge.io/docs/ref/rst/directives.html#compound-paragraph

.. compound::

   The :command:`rm` command is very dangerous.  If you are logged
   in as root and enter ::

       cd /
       rm -rf *

   you will erase the entire contents of your file system.


Inline Markup
-------------

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#inline-markup

Normal ``Inline Literal`` *Emphasis* **Strong Emphasis**.


Hyperlinks
----------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#hyperlinks

Internal_ link, external_ link.

.. _internal: `Text Formatting`_
.. _external: https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html

Other page: :doc:`code-blocks`.

Some file: :download:`insipid.png`.

Math equation: :eq:`euler`.

Footnotes
---------

.. todo:: Move footnotes and citations to separate page

https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#footnotes

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#footnotes

Footnote [#numbered]_ and [*]_.
And some more:
[#popular-label]_,
[#popular-label]_,
[#popular-label]_,
[#popular-label]_.

.. [#numbered] This is an auto-numbered footnote.
.. [#popular-label] Auto-numbered, multiple mentions.
.. [*] This is an auto-symbol footnote.

.. admonition:: :doc:`Admonition <admonitions>` title
    with footnote [#admonition-title]_

    Footnote [*]_ in admonition text.

    .. [*] This is probably not used very often.
    .. [#admonition-title] This probably even less.

.. topic:: :ref:`Topic` title with footnote [#topic-title]_

    Footnote [*]_ in topic text.

    .. [*] See above.
    .. [#topic-title] See above.

.. sidebar:: :ref:`Sidebar` title with footnote [#sidebar-title]_

    Footnote [*]_ in sidebar text.

    .. [*] See above.
    .. [#sidebar-title] See above.



Citations
---------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#citations

https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#citations

Here is a citation reference: :title-reference:`The Title` [CIT2002]_.
And another citation reference: [CIT2020]_.
Another mention of the same citation: [CIT2020]_.

.. [CIT2002] This is the citation.  It's just like a footnote,
    except the label is textual.

.. [CIT2020] A literature reference with multiple back-links.

Other Semantic Markup
---------------------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html#other-semantic-markup

:abbr:`LIFO (last-in, first-out)`

:command:`rm`

:dfn:`term`

:file:`name.{ext}`

:guilabel:`&Cancel`

:kbd:`Control-x Control-f`

:mailheader:`Content-Type`

:makevar:`AM_CFLAGS`

:manpage:`ls(1)`, :manpage:`man`

:menuselection:`Start --> &Programs`

:mimetype:`text/plain`

:newsgroup:`comp.lang.python`

:program:`rm`

:regexp:`a*`

:samp:`print(1+{variable})` (as compared to :code:`print(1)`)

:pep:`8`

:rfc:`2822`
