const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round a and b and return their sum', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should work with negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    // assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it('should work when one number is rounded up and the other is rounded down', () => {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
    assert.strictEqual(calculateNumber(1.6, 3.4), 5);
  });

  it('should work when inputs are zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.5, 0), 2);
  });

  it('should work with very large numbers', () => {
    assert.strictEqual(calculateNumber(1000000000.3, 1000000000.6), 2000000001);
  });

  it('should handle edge cases around 0.5', () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    assert.strictEqual(calculateNumber(0.6, 0.6), 2);
  });
});
