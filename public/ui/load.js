// This actually loads the app, called after the enterpriseauth generated preload.js preloads the app


document.write('<script src="https://code.jquery.com/jquery-1.12.4.js"   integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU="   crossorigin="anonymous"></script>');

var loadScripts = [
    //'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/js/bootstrap-select.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.11/angular.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.11/angular-messages.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.20.0/select.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.5.11/angular-sanitize.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js',
    'app.js',
    'app-services/parts.service.js',
    'app-services/assets.service.js',
    'app-services/partners.service.js',
    'app-services/locations.service.js',
    'home/index.controller.js',
	'parts/parts.controller.js',
	'assets/assets.controller.js',
    'partners/partners.controller.js',
    'reports/reports.controller.js'
];

// load up all the scripts
for (var i in loadScripts) {
    document.write('<script src="' + loadScripts[i] + '" type="text/javascript"></script>');
}
