from os import path


def setup(app):
    """Sphinx extension entry point."""
    app.add_html_theme(
        'insipid',
        path.abspath(path.join(path.dirname(__file__), 'insipid')))
