'use strict';

/**
 * @ngdoc overview
 * @name angularTutorialJusticeApp
 * @description
 * # angularTutorialJusticeApp
 *
 * Main module of the application.
 */
angular
  .module('angularTutorialJusticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('AUTH_SERVICE_BASE_URI', 'http://userservice.staging.tangentmicroservices.com/')
  .constant('PROJECT_SERVICE_BASE_URI', 'http://projectservice.staging.tangentmicroservices.com/api/v1/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/edit-project/:projectID', {
        templateUrl: 'views/edit-projects.html',
        controller: 'EditProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
