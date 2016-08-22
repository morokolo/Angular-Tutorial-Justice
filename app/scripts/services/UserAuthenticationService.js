'use strict';

 angular.module('angularTutorialJusticeApp')
  .service('UserAuthenticationService', function ($http,$rootScope,$cookies, $cookieStore, $q,AUTH_SERVICE_BASE_URI) {
    var service = this;

        // refactroring the login services
        service.login = function (username, password) {
            var deferred = $q.defer();
            $http({
                url: AUTH_SERVICE_BASE_URI + 'api-token-auth/',
                method: 'POST',
                contentType: "application/json",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param({
                    "username": username,
                    "password": password
                })
            }).success(function (response) {
                service.setToken(response.token);
                deferred.resolve();
            }).error(function (response) {
                service.logout();
                deferred.reject(response);
            });
            return deferred.promise;
        };

        service.logout = function(){
            $cookieStore.remove('token');
        };
        service.setToken = function (token) {
            $cookieStore.put('token', token);
        };
        service.getToken = function () {
            return $cookieStore.get('token');

        };
        service.isLoggedInResolve = function () {
            var deferred = $q.defer();
            if (service.getToken() === undefined) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise.catch(function () {
                $state.go('login');
            });
        };
        service.isLoggedIn = function () {
            return service.getToken() !== undefined;
            console.log('test this');
        };
        return service;  


  });