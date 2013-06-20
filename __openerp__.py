{
    'name' : 'HK Planner',
    'version' : '7.0.0.1',
    'author' : 'ToolPart Team',
    'depends' : ['web','hk_web'],
    'data' : [
        'menu.xml'
	],
	    'description':
"""
HK Planner
===============
Kapacitástervező modul a HK Ceram részére.
""",
    'installable': True,
    'active': False,
	'css': [
        'static/css/app.css'
    ],
    'js': [
        'static/js/app.js',
        'static/js/vendor/angular.js',
        'static/js/controllers/controllers.js'
    ],
    'qweb': [
        'static/views/home.html',
        'static/views/rawTable.html',
        'static/views/burnTable.html'
    ],
}