'use strict';

describe('Controller: ProjectsCtrl', function () {

    // load the controller's module
    beforeEach(module('angularTutorialJusticeApp'));

    var controller,
        $rootScope,
        $scope,
        $controller,
        ProjectServices,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_, _ProjectServices_) {
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        ProjectServices = _ProjectServices_;

    }));

    it('should have a project list', function () {
        $httpBackend.whenGET(/^.*/).respond(200, '');
        $rootScope.$digest();

        controller = $controller('ProjectsCtrl', {
            $scope: $scope
        });

     $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/')
            .respond(200);

        ProjectServices.getProjects()
            .then(function (response) {
                var dataResponse = response[0];
                expect(dataResponse).toBeDefined();
            });

    });


    it('should fire deleteProject()', function (){
            controller = $controller('ProjectsCtrl', {
            $scope: $scope
        });
        $scope.deleteProject();
  });

    it('should delete a single project from the services', function () {
            var response = {
                id: null
            };
        $httpBackend.expectDELETE('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/35/')
            .respond(200);
        ProjectServices.getDeleteProjectById(35)
            .then(function (dataResponse) {
                expect(dataResponse).toEqual(response);
            });
    });

});