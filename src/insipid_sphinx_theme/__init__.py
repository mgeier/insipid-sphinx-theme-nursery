"""An insipid Sphinx theme."""
from os import path

__version__ = '0.0.0'


def setup(app):
    """Sphinx extension entry point."""
    app.require_sphinx('1.6')  # For add_html_theme()
    app.add_html_theme(
        'insipid',
        path.abspath(path.join(path.dirname(__file__), 'insipid')))
    return {
        'version': __version__,
        'parallel_read_safe': True,
    }
