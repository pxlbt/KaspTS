var angular = require ('angular')
var _ = require ('underscore')
require('angular-route');
var UsersController = require('controllers/Users')
var hashParam = require('services/hash')
var getUsers = require('services/users')

var app = angular.module('app', ['ngRoute'])
  .service('hashParam', hashParam)
  .service('getUsers', ['$http', getUsers])
  .controller('UsersController', ['$scope', '$http', '$location', 'hashParam', 'getUsers' ,UsersController])

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html'
      }).
      when('/users', {
        templateUrl: 'partials/users_list.html',
        controller: 'UsersController'
      })
  }]);
