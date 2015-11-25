(function () {
    'use strict';

    angular.module('demoApp', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider.when('/', {
                template: '<h5>This is the default route</h5>'
            })
            .when('/home', {
                template: '<h5>This is the home route</h5>'
            })
            .when('/View2', {
                template: '<h5>This is the View2 Route<h5>'
            })
            .otherwise({ redirectTo: '/' });

        }]);
})();
