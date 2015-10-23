'use strict';

describe('Service: parties', function () {

  // load the service's module
  beforeEach(module('rCaririApp'));

  // instantiate service
  var parties;
  beforeEach(inject(function (_parties_) {
    parties = _parties_;
  }));

  it('should do something', function () {
    expect(!!parties).toBe(true);
  });

});
