'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('AboutCtrl', function ($scope) {
        var id="about";
    	activeMenu(id);
        
        $scope.autor={
            'nombres':'Christian',
            'apellidos':'Portilla Pauca',
            'email':'xhrist14n@gmail.com',
            'web':'http://www.christianportilla.com',
            'blog':'http://javascriptx.wordpress.com'
        };
        $scope.curso='Desarrollo de Aplicaciones Web basadas en AngularJS';
        $scope.tema='Eventos en AngularJS';
  });
