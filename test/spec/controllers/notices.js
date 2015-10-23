'use strict';

describe('Controller: NoticesCtrl', function () {

  // load the controller's module
  beforeEach(module('rCaririApp'));

  var NoticesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoticesCtrl = $controller('NoticesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoticesCtrl.awesomeThings.length).toBe(3);
  });
});
