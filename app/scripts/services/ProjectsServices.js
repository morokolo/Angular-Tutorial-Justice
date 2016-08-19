'use strict';

 angular.module('angularTutorialJusticeApp')
  .service('ProjectServices', function ($http,$rootScope,$cookies,$q,PROJECT_SERVICE_BASE_URI, httpHelper, UserAuthenticationService	) {
    var projectAPI = this;

      // refactoring the get projects function
      projectAPI.getProjects = function() {
            var data = {};
            var url = PROJECT_SERVICE_BASE_URI + 'projects/';
            return httpHelper.get(url, data);
      };

      // refactoring the get projects by ID function
      projectAPI.getProjectbyId = function(projectId) {
            var data = {
                          'projectId': projectId
                       };
            var url = PROJECT_SERVICE_BASE_URI + 'projects/';
            return httpHelper.get(url, data);
      };

      // refactoring the update project function
      projectAPI.updateProject = function(projectId, projectObject) {
            var data = {
                          'projectId': projectId,
                          'projectObject': projectObject
                       };
            var url = PROJECT_SERVICE_BASE_URI + 'projects/';
            return httpHelper.update(url, data);
      };

      // refactoring the get projects by ID function
      projectAPI.getDeleteProjectById = function(projectId) {
            var data = {
                          'projectId': projectId
                       };
            var url = PROJECT_SERVICE_BASE_URI + 'projects/';
            return httpHelper.delete(url, data);
      };


  });