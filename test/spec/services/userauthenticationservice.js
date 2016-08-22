'use strict';

describe('Service: UserAuthenticationService', function () {
    // load the service's module
    beforeEach(module('angularTutorialJusticeApp'));

    var UserAuthenticationService,
        $cookies,
        $httpBackend;

    beforeEach(inject(function (_UserAuthenticationService_, _$cookies_, _$httpBackend_) {
        UserAuthenticationService = _UserAuthenticationService_;
        $cookies = _$cookies_;
        $httpBackend = _$httpBackend_;

        //Set response for GET request made by ngRoute
        $httpBackend.whenGET(/^.*/).respond(200, '');
    }));

    it('should get a token and set user as logged in', function () {
        $httpBackend.expectPOST('http://userservice.staging.tangentmicroservices.com/api-token-auth/')
            .respond({'token': '71456dbd15de0c0b6d2b4b44e5a92ad94c6def97'});

        UserAuthenticationService.login('admin', 'admin')
            .then(function (data) {
                expect(!!data.token).toBe(true);
                expect($cookies.get('token')).toBe('71456dbd15de0c0b6d2b4b44e5a92ad94c6def97');
            });
    });

});