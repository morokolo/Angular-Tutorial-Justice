'use strict';
/**
 * @ngdoc service
 * @name app.httpHelper
 * @description
 * # HTTP helper for managing requests.
 * Service in the app.
 */
angular.module('angularTutorialJusticeApp')
    .service('httpHelper', function HttpHelper($http, $location, UserAuthenticationService) {
        var httpHelper = {};
        var headers = {
                        'Content-Type': 'application/json',
                        'Authorization': UserAuthenticationService.getToken()
                      };//addded this here since this header are needed to perform further tasks

        httpHelper.post = function (url, data) {
            data.apikey = UserAuthenticationService.getToken();
            url += '?' + $.param(data);
            return $http({
                method: 'POST',
                url: url,
                data: $.param(data),
                headers: headers
            });
        };
        httpHelper.update = function (url, data) {
            var projectId = data.projectId;
            var projectObject = data.projectObject;
            url +=  projectId+'/';
            return $http({
                method: 'PUT',
                url: url,
                data: projectObject,
                headers: headers
            });
        };
    	httpHelper.delete = function (url, data) {
    			data.apikey = UserAuthenticationService.getToken();
    			url += '?' + $.param(data);
    			return $http({
    				method: 'DELETE',
    				url: url,
    				data: $.param(data),
    				headers: headers
    			});
    	};
        httpHelper.get = function (url, data) {
            if(data.projectId !== undefined){
                var id =data.projectId;
                url +=  id + '/';
            }
            return $http({
                method: 'GET',
                url: url,
                headers: headers
            });
        };
        return httpHelper;
    });
