'use strict';
/**
 * @ngdoc service
 * @name app.httpHelper
 * @description
 * # HTTP helper for managing requests.
 * Service in the app.
 */
angular.module('app')
    .service('httpHelper', function HttpHelper($http, $location, serviceRequestAuth) {
        var httpHelper = {};
        var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        httpHelper.post = function (url, data) {
            data.apikey = serviceRequestAuth.getToken();
            url += '?' + $.param(data);
            return $http({
                method: 'POST',
                url: url,
                data: $.param(data),
                headers: headers
            });
        };
        httpHelper.update = function (url, data) {
            data.apikey = serviceRequestAuth.getToken();
            url += '?' + $.param(data);
            return $http({
                method: 'PUT',
                url: url,
                data: $.param(data),
                headers: headers
            });
        };
    		httpHelper.delete = function (url, data) {
    			data.apikey = serviceRequestAuth.getToken();
    			url += '?' + $.param(data);
    			return $http({
    				method: 'DELETE',
    				url: url,
    				data: $.param(data),
    				headers: headers
    			});
    		};
        httpHelper.get = function (url, data) {
            data.apikey = serviceRequestAuth.getToken();
            url += '?' + $.param(data);
            return $http({
                method: 'GET',
                url: url,
                headers: headers
            });
        };
        return httpHelper;
    });
