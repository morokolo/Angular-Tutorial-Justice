'use strict';

/**
 * @ngdoc function
 * @name angularTutorialJusticeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the angularTutorialJusticeApp
 */
angular.module('angularTutorialJusticeApp')
  .controller('ProjectsCtrl', function ($scope, $location, $window, ProjectServices) {
    

    	ProjectServices.getProjects()
		.then(function (response) {
			$scope.projects =response.data;
		})
		.catch(function (response) {
			console.log(response.data);				
		});

	
		$scope.deleteProject = function (projectId) {

			var deleteProject = $window.confirm('Are you absolutely sure you want to delete?');

		    if (deleteProject) {
				ProjectServices.getDeleteProjectById(projectId)
				.then(function (response) {
					//make magic happen here
				})
				.catch(function (response) {
					console.log(response.data);			
				});
		    }

		}



  });
