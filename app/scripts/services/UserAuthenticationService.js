'use strict';

 angular.module('angularTutorialJusticeApp')
  .service('UserAuthenticationService', function ($http,$rootScope,$cookies,$q,AUTH_SERVICE_BASE_URI	) {
    var service = this;

    service.login = function (username, password) {
      	console.log('user loging on');
     	var deferred = $q.defer();
    	var url = AUTH_SERVICE_BASE_URI + 'api-token-auth/';

    $http.post(url, { username: username, password: password })
    .success(function (response, status, headers, config) {
       console.log(response);
       if (response.token) {
            $cookies.put('token', response.token);
            //service.loggedIn = true;
        }

        	deferred.resolve(response, status, headers, config);
    	})
    .error(function (response, status, headers, config) {
    	console.log(response);
        deferred.reject(response, status, headers, config);
    });

    return deferred.promise;
    };

    service.getAuthHeaders = function () {
    		var config = {
    				headers: {
            			'Authorization': $cookies.get('token'),
            			'Content-Type': 'application/json'
        				}
    				};

			return config;
		};

  


  });