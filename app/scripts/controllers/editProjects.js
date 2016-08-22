'use strict';

/**
 * @ngdoc function
 * @name angularTutorialJusticeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the angularTutorialJusticeApp
 */
angular.module('angularTutorialJusticeApp')
  .controller('EditProjectsCtrl', function ($scope, $route, $location, ProjectServices) {
    
		var projectID = $route.current.params.projectID;
		
    	ProjectServices.getProjectbyId(projectID)
		.then(function (response) {
			$scope.project =response.data;
		})
		.catch(function (response) {
			console.log(response.data);			
		});

		$scope.updateProject = function () {
		var projectObject = $scope.project;
		var id = $scope.project.pk;
			ProjectServices.updateProject(id, projectObject)
			.then(function (response) {
				$scope.project =response;
				$location.path('/projects');
			})
			.catch(function (response) {
				console.log(response);			
			});
		}

		

		


  });
