from setuptools import setup

setup(
    name='insipid-sphinx-theme',
    version='0.0.0',
    package_dir={'': 'src'},
    packages=['insipid_sphinx_theme'],
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
    zip_safe=True,
    entry_points={
        'sphinx.html_themes': [
            'insipid = insipid_sphinx_theme',
        ]
    },
)
