/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('FunctionCtrl', function ($scope) {
        var id="function";
    	activeMenu(id);
        
        $scope.contador = 1;
        
        $scope.miEvento = function() {
            $scope.contador++;
        }
        
  });

