'use strict';

/**
 * @ngdoc function
 * @name angularTutorialJusticeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the angularTutorialJusticeApp
 */
angular.module('angularTutorialJusticeApp')
  .controller('ProjectsCtrl', function ($scope,ProjectServices) {
    

    	ProjectServices.getProjects()
		.then(function (response) {
			$scope.projects =response.data;
		})
		.catch(function (response) {
			console.log(response.data);				
		});





  });
