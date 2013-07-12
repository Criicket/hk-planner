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
        'static/js/vendor/jsonselect.min.js',
        'static/js/controllers/controllers.js',
        'static/js/controllers/tableCtrl.js',
        'static/js/controllers/dollopTableCtrl.js',
        'static/js/services/services.js',
        'static/js/services/openerpService.js',
        'static/js/services/calcService.js',
        'static/js/directives/directives.js'
    ],
    'qweb': [
        'static/views/home.html',
        'static/views/dollopTrack.html',
        'static/views/burnTable.html'
    ],
}