copyright = '2020, Matthias Geier'
master_doc = 'index'

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
   'nosidebar': [],  # To demonstrate a page without a sidebar
}

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
]
