'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope) {
        var id="main";
    	activeMenu(id);
        $scope.curso='Desarrollo de Aplicaciones Web con AngularJS - Eventos';
        $scope.autor='Christian Portilla Pauca';
  });
