'use strict';

describe('Controller: PartiesCtrl', function () {

  // load the controller's module
  beforeEach(module('rCaririApp'));

  var PartiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartiesCtrl = $controller('PartiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PartiesCtrl.awesomeThings.length).toBe(3);
  });
});
