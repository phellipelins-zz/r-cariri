'use strict';

describe('Service: programs', function () {

  // load the service's module
  beforeEach(module('rCaririApp'));

  // instantiate service
  var programs;
  beforeEach(inject(function (_programs_) {
    programs = _programs_;
  }));

  it('should do something', function () {
    expect(!!programs).toBe(true);
  });

});
