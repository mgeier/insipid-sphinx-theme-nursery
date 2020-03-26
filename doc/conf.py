html_theme = 'insipid'
html_theme_options = {
    #'navigation_with_keys': False,
    #'nosidebar': True,
    'rightsidebar': True,
    #'body_min_width': 0,  # When smaller, body is covered by sidebar
    #'body_max_width': None,
    #'sidebarwidth': 300,

    #'left_buttons': ['home-button.html', 'search-button.html'],
    #'right_buttons': [],

    'body_centered': False,
    #'topbar_transition': '0.7s ease-out',
    #'sidebar_transition': '0.3s ease-out',

    #'sidebar_collapse': False,
    #'sidebar_includehidden': False,
}
html_sidebars = {
   '**': [
       'github-badge.html',
       'globaltoc.html',
       'relations.html',
       'sourcelink.html',
       #'searchbox.html',
   ],
   'showcase/no-sidebar': [],  # To demonstrate a page without a sidebar
}

release = '0.0.0'
project = 'Insipid Sphinx Theme'
#html_title = 'Insipid Sphinx Theme'
html_short_title = 'insipid'
html_last_updated_fmt = ''
html_add_permalinks = '\N{LINK SYMBOL}'
html_secnumber_suffix = '\N{FIGURE SPACE}'
html_logo = 'showcase/insipid.png'
html_favicon = 'favicon.ico'

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.todo',
    'sphinx.ext.viewcode',
]

#html_static_path = ['_static']
templates_path = ['_templates']

copyright = '2020, Matthias Geier'

# Since Sphinx version 2.0, 'index' is the default:
master_doc = 'index'

todo_include_todos = True
todo_link_only = True

numfig = True

manpages_url = 'https://manpages.debian.org/{path}'
