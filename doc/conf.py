# -- One required setting -------------------------------------------------

html_theme = 'insipid'

# -- Recommended changes of Sphinx defaults -------------------------------

html_add_permalinks = '\N{SECTION SIGN}'

# -- Recommended settings for readthedocs.org -----------------------------

# If False, source links to Bitbucket/Github/GitLab are shown
html_copy_source = False

# -- Settings for source code ---------------------------------------------

# Use 'none' when you don't want the default 'python'
#highlight_language = 'none'

# Style of syntax highlighting
#pygments_style = 'monokai'

# -- Page footer ----------------------------------------------------------

html_show_copyright = False
#html_last_updated_fmt = '%Y-%m-%d'
#html_show_sphinx = False
#html_show_sourcelink = False
#html_sourcelink_suffix = ''

# -- Theme configuration --------------------------------------------------

html_theme_options = {
    #'body_centered': False,
    #'body_max_width': None,
    #'body_min_width': 0,
    #'breadcrumbs': True,
    #'globaltoc_collapse': False,
    #'globaltoc_includehidden': True,
    #'left_buttons': [
    #    'home-button.html',
    #],
    #'navbar_top': False,
    #'navbar_bottom': False,
    #'navigation_with_keys': False,
    #'nosidebar': True,
    #'right_buttons': [
    #    'search-button.html',
    #],
    #'rightsidebar': True,
    #'show_insipid': False,
    #'sidebar_transition': '1s ease-out',
    #'sidebarwidth': 300,
    #'strip_section_numbers': False,
    #'topbar_transition': '1.5s ease-out',
}

html_sidebars = {
   '**': [
       'github-badge.html',
       #'searchbox.html',
       'globaltoc.html',
       'separator.html',
       'indices.html',
       'ethical-ad.html',
   ],
   'showcase/no-sidebar': [],  # To demonstrate a page without a sidebar
}

# -- Project information --------------------------------------------------

project = 'insipid-sphinx-theme'
#html_title = 'Insipid Sphinx Theme'
html_short_title = 'insipid'
html_logo = 'showcase/insipid.png'
#copyright = '<insert year and copyright holder>'

#version = '???'
#release = '???'

# -- ??? ------------------------------------------------------------------

html_secnumber_suffix = '\N{FIGURE SPACE}'
html_favicon = 'favicon.ico'
#smartquotes = False

html_baseurl = 'https://insipid-sphinx-theme-nursery.readthedocs.io/'

#html_domain_indices = False
#html_use_index = False
#html_split_index = True

# -- Extensions -----------------------------------------------------------

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx.ext.todo',
    'sphinx.ext.viewcode',
    'sphinx_last_updated_by_git',
]

intersphinx_mapping = {'sphinx': ('https://www.sphinx-doc.org', None)}

todo_include_todos = True
todo_link_only = True

# -- ??? ------------------------------------------------------------------

#html_static_path = ['_static']
templates_path = ['_templates']

# Since Sphinx version 2.0, 'index' is the default:
master_doc = 'index'

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
