'use strict';
/**
 * @ngdoc service
 * @name app.serviceRequestAuth
 * @description
 * # serviceRequestAuth
 * Service in the app.
 */
angular.module('app')
    .service('serviceRequestAuth', function ($q, $http, $state, $cookieStore, AUTHENTICATION_SERVICE_URL) {
        var api = {};
        api.auth = function (username, password) {
            var deferred = $q.defer();
            $http({
                url: AUTHENTICATION_SERVICE_URL + 'login/',
                method: 'POST',
                contentType: "application/json",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param({
                    "username": username,
                    "password": password,
                    "type" : "Employee"
                })
            }).success(function (response) {
                api.setToken(response.data.token);
                deferred.resolve();
            }).error(function (response) {
                api.logout();
                deferred.reject(response);
            });
            return deferred.promise;
        };
        api.logout = function(){
            $cookieStore.remove('token');
        };
        api.setToken = function (token) {
            $cookieStore.put('token', token);
        };
        api.getToken = function () {
            return $cookieStore.get('token');
        };
        api.isLoggedInResolve = function () {
            var deferred = $q.defer();
            if (api.getToken() === undefined) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise.catch(function () {
                $state.go('login');
            });
        };
        api.isLoggedIn = function () {
            return api.getToken() !== undefined;
        };
        return api;
    });
