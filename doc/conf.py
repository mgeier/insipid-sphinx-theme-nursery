html_theme = 'insipid'
html_theme_options = {
    #'navigation_with_keys': False,
    #'nosidebar': True,
    #'body_min_width': 0,
    #'body_max_width': None,
    #'sidebarwidth': 300,

    #'body_centered': False,
    #'topbar_transition': '0.7s ease-out',
    #'sidebar_transition': '0.3s ease-out',

    #'sidebar_collapse': False,
    #'sidebar_includehidden': False,
}
html_sidebars = {
   '**': [
       'globaltoc.html',
       #'localtoc.html',
       #'relations.html',
       'sourcelink.html',
       #'searchbox.html',
   ],
   'example/nosidebar': [],  # To demonstrate a page without a sidebar
}

html_title = 'Insipid Sphinx Theme'
html_short_title = 'insipid'
html_last_updated_fmt = ''
html_add_permalinks = '\N{LINK SYMBOL}'
html_secnumber_suffix = ' '

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
]

#html_static_path = ['_static']

copyright = '2020, Matthias Geier'

# Since Sphinx version 2.0, 'index' is the default:
master_doc = 'index'
