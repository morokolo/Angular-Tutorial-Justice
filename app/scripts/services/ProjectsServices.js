'use strict';

 angular.module('angularTutorialJusticeApp')
  .service('ProjectServices', function ($http,$rootScope,$cookies,$q,PROJECT_SERVICE_BASE_URI,UserAuthenticationService	) {
    var projectAPI = this;

    projectAPI.getProjects = function () {

      var deferred = $q.defer(),
          url = PROJECT_SERVICE_BASE_URI + 'projects/';
          $http.get(url, UserAuthenticationService.getAuthHeaders())
          .success(function (response, status, headers, config) {
              if (response) {
                  deferred.resolve(response);
              }
              deferred.resolve(response, status, headers, config);
          }).error(function (response, status, headers, config) {

              deferred.reject(response, status, headers, config);
          });

        return deferred.promise;
      };


      projectAPI.getProjectbyId = function (projectId) {
        //console.log('the ID ' + projectId);
        var deferred = $q.defer(),
            url = PROJECT_SERVICE_BASE_URI + 'projects/'+projectId+'/';
            $http.get(url, UserAuthenticationService.getAuthHeaders())
            .success(function (response, status, headers, config) {
                if (response) {
                    deferred.resolve(response);
                }
                deferred.resolve(response, status, headers, config);
            }).error(function (response, status, headers, config) {
              
                deferred.reject(response, status, headers, config);
            });

        return deferred.promise;
      };

        projectAPI.getProjectbyId = function (projectId, projectObject) {
          //console.log('the ID ' + projectId);

          var deferred = $q.defer(),
              url = PROJECT_SERVICE_BASE_URI + 'projects/'+projectId+'/';
              $http.get(url, projectObject, UserAuthenticationService.getAuthHeaders())
              .success(function (response, status, headers, config) {
                  if (response) {
                    console.log('Success responsse' + response);
                      deferred.resolve(response);
                  }
                  deferred.resolve(response, status, headers, config);
              }).error(function (response, status, headers, config) {
                    console.log('Success responsse' + response);
                  
                  deferred.reject(response, status, headers, config);
              });

        return deferred.promise;
      };



  });