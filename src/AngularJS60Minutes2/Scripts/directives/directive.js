(function() {
    'use strict';

    angular.module('demoApp')
        .directive('navigationDirective', [function () {
            return {
                templateUrl: '/Partials/navigation.html'
            }
        }]);

})();