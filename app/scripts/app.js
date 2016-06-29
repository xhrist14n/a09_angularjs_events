'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/move', {
        templateUrl: 'views/move.html',
        controller: 'MoveCtrl'
      })
      .when('/click', {
        templateUrl: 'views/click.html',
        controller: 'ClickCtrl'
      })
      .when('/function', {
        templateUrl: 'views/function.html',
        controller: 'FunctionCtrl'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
