'use strict';

describe('Controller: EditProjectsCtrl', function () {

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


    // it('should fire login()', function (){
    //         controller = $controller('EditProjectsCtrl', {
    //         $scope: $scope
    //     });
    //     $scope.updateProject();
    // });

    it('should get the selected item', function () {
        //expect(ProjectServices.getProjectbyId(35)).toHaveBeenCalled();  
      });



    it('should fire updateProject()', function (){
        $httpBackend.whenGET(/^.*/).respond(200, '');
        $rootScope.$digest();

        controller = $controller('EditProjectsCtrl', {
            $scope: $scope
        });

     $httpBackend.expectPUT('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/35/')
            .respond(200);

        ProjectServices.updateProject(35)
            .then(function (response) {
                var dataResponse = response[0];
                expect(dataResponse).toBeDefined();
            });


    });


});