'use strict';

/**
 * @ngdoc function
 * @name angularTutorialJusticeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularTutorialJusticeApp
 */
angular.module('angularTutorialJusticeApp')
  .controller('LoginCtrl', function ($scope,$cookies,$cookieStore, $location,UserAuthenticationService) {
    
    $scope.login = function () {

    	UserAuthenticationService.login($scope.username,$scope.password)
		.then(function () {
			$location.path('/projects');
		})
		.catch(function (response) {
			if (response.non_field_errors) {
				//set errors
			}
						
		});

    }
  });
