API Documentation
=================

https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html


Manual Definitions
------------------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html#the-python-domain

A link: :func:`spam`.

.. function:: spam(eggs)
              ham(eggs)

    Spam or ham.

.. data:: module.__name__

    Name of the module.


Info Field Lists
----------------

https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html#info-field-lists

A link: :func:`send_message`.

.. function:: send_message(sender, recipient, message_body, [priority=1])

   Send a message to a recipient

   :param str sender: The person sending the message
   :param str recipient: The recipient of the message
   :param str message_body: The body of the message
   :param priority: The priority of the message, can be a number 1-5
   :type priority: integer or None
   :return: the message id
   :rtype: int
   :raises ValueError: if the message_body exceeds 160 characters
   :raises TypeError: if the message_body is not a basestring


``sphinx.ext.automodule``
-------------------------

A link: :func:`insipid_sphinx_theme.setup`.

.. automodule:: insipid_sphinx_theme
    :members:

``sphinx.ext.autosummary``
--------------------------

.. autosummary::

   setup

``:nosignatures:``

.. autosummary::
   :nosignatures:

   setup
