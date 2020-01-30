from setuptools import setup

# "import" __version__
__version__ = 'unknown'
for line in open('src/insipid_sphinx_theme/__init__.py'):
    if line.startswith('__version__'):
        exec(line)
        break

setup(
    name='insipid-sphinx-theme',
    version=__version__,
    package_dir={'': 'src'},
    packages=['insipid_sphinx_theme'],
    package_data={'insipid_sphinx_theme': [
        'insipid/theme.conf',
        'insipid/*.html',
        'insipid/static/*.css_t',
        'insipid/static/*.js',
        'insipid/icons/*.svg',
    ]},
    python_requires='>=3',
    author='Matthias Geier',
    author_email='Matthias.Geier@gmail.com',
    description='An insipid Sphinx theme',
    long_description=open('README.rst').read(),
    license='BSD-2-Clause',
    keywords=''.split(),
    url='',
    project_urls={
        'Documentation': '',
        'Source Code': '',
        'Bug Tracker': '',
    },
    platforms='any',
    classifiers=[
        'Framework :: Sphinx',
        'Framework :: Sphinx :: Extension',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Topic :: Documentation :: Sphinx',
    ],
    zip_safe=False,
    entry_points={
        'sphinx.html_themes': [
            'insipid = insipid_sphinx_theme',
        ]
    },
)
