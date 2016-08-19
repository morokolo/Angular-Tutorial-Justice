'use strict';

 angular.module('angularTutorialJusticeApp')
  .service('ProjectServices', function ($http,$rootScope,$cookies,$q,PROJECT_SERVICE_BASE_URI, httpHelper, UserAuthenticationService	) {
    var projectAPI = this;
    var url = PROJECT_SERVICE_BASE_URI + 'projects/';
      // refactoring the get projects function
      projectAPI.getProjects = function() {
            var data = {};
            return httpHelper.get(url, data);
      };

      // refactoring the get projects by ID function
      projectAPI.getProjectbyId = function(projectId) {
            var data = {
                          'projectId': projectId
                       };
            
            return httpHelper.get(url, data);
      };

      // refactoring the update project function
      projectAPI.updateProject = function(projectId, projectObject) {
            var data = {
                          'projectId': projectId,
                          'projectObject': projectObject
                       };
            return httpHelper.update(url, data);
      };

      // refactoring the get projects by ID function
      projectAPI.getDeleteProjectById = function(projectId) {
            url += projectId +'/';
            return httpHelper.delete(url, data);
      };


  });