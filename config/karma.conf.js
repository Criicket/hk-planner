basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'test/openerp_env/oe_env.js',
    'static/js/vendor/angular.js',
    'static/js/vendor/angular-*.js',
    'test/lib/angular/angular-mocks.js',
    'static/js/**/*.js',
    'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
