angular.module('stelmach', ['stelmach.controllers','stelmach.services','stelmach.animations','stelmach.resources','ngResource','ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        }).
        when('/about-en', {
            templateUrl: 'templates/about-stel-en.html',
            controller: 'AboutCtrl'
        }).
        when('/about-el', {
            templateUrl: 'templates/about-stel-el.html',
            controller: 'AboutCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
