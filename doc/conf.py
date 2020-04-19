html_theme = 'insipid'
html_theme_options = {
    #'navigation_with_keys': False,
    #'nosidebar': True,
    'rightsidebar': True,
    #'navbar_top': False,
    #'navbar_bottom': False,
    #'strip_section_numbers': False,
    #'body_min_width': 0,  # When smaller, body is covered by sidebar
    #'body_max_width': None,
    #'sidebarwidth': 300,
    #'breadcrumbs': True,

    #'left_buttons': [
    #    'home-button.html',
    #],
    #'right_buttons': [
    #    'search-button.html',
    #],

    #'body_centered': False,
    #'topbar_transition': '0.7s ease-out',
    #'sidebar_transition': '0.3s ease-out',
    #'show_insipid': False,
}
html_sidebars = {
   '**': [
       'github-badge.html',
       #'searchbox.html',
       'globaltoc.html',
       'separator.html',
       'indices.html',
   ],
   'showcase/no-sidebar': [],  # To demonstrate a page without a sidebar
}

project = 'insipid-sphinx-theme'

#html_title = 'Insipid Sphinx Theme'
html_short_title = 'insipid'
html_copy_source = False
#html_show_sourcelink = False
#html_sourcelink_suffix = ''
html_show_copyright = False
#html_show_sphinx = False
#html_add_permalinks = '\N{LINK SYMBOL}'
#html_add_permalinks = '\N{PILCROW SIGN}'
html_add_permalinks = '\N{SECTION SIGN}'
html_secnumber_suffix = '\N{FIGURE SPACE}'
html_logo = 'showcase/insipid.png'
html_favicon = 'favicon.ico'
#smartquotes = False

html_baseurl = 'https://insipid-sphinx-theme-nursery.readthedocs.io/'

#html_domain_indices = False
#html_use_index = False
#html_split_index = True

highlight_language = 'none'

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx.ext.todo',
    'sphinx.ext.viewcode',
    'sphinx_copybutton',
    'sphinx_last_updated_by_git',
]

intersphinx_mapping = {'sphinx': ('https://www.sphinx-doc.org', None)}

#html_static_path = ['_static']
templates_path = ['_templates']

# Since Sphinx version 2.0, 'index' is the default:
master_doc = 'index'

todo_include_todos = True
todo_link_only = True

numfig = True

#language = 'es'

# -- Get version information from Git -------------------------------------

try:
    from subprocess import check_output
    release = check_output(['git', 'describe', '--tags', '--always'])
    release = release.decode().strip()
except Exception:
    release = '<unknown>'

# -- Define custom directives/roles ---------------------------------------

def setup(app):
    app.add_object_type(
        'confval', 'confval',
        objname='Sphinx configuration value',
        indextemplate='pair: %s; Sphinx configuration value')
    app.add_object_type(
        'theme-option', 'theme-option',
        objname='Theme option',
        indextemplate='pair: %s; Theme option')
