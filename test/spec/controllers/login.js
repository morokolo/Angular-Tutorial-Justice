'use strict';

describe('Controller: LoginCtrl', function () {

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


    it('should fire login()', function (){
            controller = $controller('LoginCtrl', {
            $scope: $scope
        });
        $scope.login();
  });


});