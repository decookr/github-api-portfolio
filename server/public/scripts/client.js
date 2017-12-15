var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: '/views/user.html',
      controller: 'UserController as uc',
    }).when('/repos', {
      templateUrl: '/views/repos.html',
      controller: 'UserController as uc'
    }).otherwise({
      template: '<h1>404</h1>'
  });
});
