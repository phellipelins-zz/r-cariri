'use strict';

describe('Controller: NoticeCtrl', function () {

  // load the controller's module
  beforeEach(module('rCaririApp'));

  var NoticeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoticeCtrl = $controller('NoticeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoticeCtrl.awesomeThings.length).toBe(3);
  });
});
