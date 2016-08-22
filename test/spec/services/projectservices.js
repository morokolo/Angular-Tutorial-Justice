'use strict';

describe('Service: ProjectServices', function () {
    // load the service's module
    beforeEach(module('angularTutorialJusticeApp'));
    // instantiate service
    var ProjectServices,
        $httpBackend;

    beforeEach(inject(function (_ProjectServices_, _$httpBackend_) {
        ProjectServices = _ProjectServices_;
        $httpBackend = _$httpBackend_;
    }));

    it('should project list from the service', function () {
        $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/')
            .respond([{
                'pk': 35,
                'title': 'Justice Unit Tester',
                'description': 'To run unit tests on the projects',
                'start_date': '2016-08-22',
                'end_date': '2016-08-22',
                'is_billable': true,
                'is_active': true,
                'task_set': [],
                'resource_set': []
            }]);

        ProjectServices.getProjects()
            .then(function (response) {
                var dataResponse = response[0];
                expect(dataResponse).toBeDefined();
            });
    });

    it('should get a single project from the services', function () {
        var respond = {
                'pk': 35,
                'title': 'Justice Unit Tester',
                'description': 'To run unit tests on the projects',
                'start_date': '2016-08-22',
                'end_date': '2016-08-22',
                'is_billable': true,
                'is_active': true,
                'task_set': [],
                'resource_set': []
            };
        
        $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/3/')
            .respond({
                'pk': 35,
                'title': 'Justice Unit Tester',
                'description': 'To run unit tests on the projects',
                'start_date': '2016-08-22',
                'end_date': '2016-08-22',
                'is_billable': true,
                'is_active': true,
                'task_set': [],
                'resource_set': []
            });

        ProjectServices.getProjectbyId(35)
            .then(function (dataResponse) {
                expect(dataResponse).toEqual(respond);
            });
    });

    it('should update a single project from the services', function () {
            var response = {
                id: 35,
                title: 'test title updatess'
            };
        $httpBackend.expectPUT('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/35/')
            .respond(200);
        ProjectServices.updateProject(35,{id: 35, title: 'test title update'})
            .then(function (dataResponse) {
                expect(dataResponse).toEqual(response);
            });
    });


});

