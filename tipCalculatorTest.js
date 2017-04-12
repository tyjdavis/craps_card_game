let tc = require('./tipCalculator');
let assert = require('assert');

describe('tipCalculator', function () {
  it('returns 15% of the amount given as an argument', function () {
    let calculatedTipAmount = tc(100);
    assert.equal(15, calculatedTipAmount);
  });
});
