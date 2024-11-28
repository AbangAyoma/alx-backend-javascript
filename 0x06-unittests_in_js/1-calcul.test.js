const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 3);
  });

  it('should return the difference when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 4);
  });

  it('should return the division result when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.3), 3);
  });

  it('should return Error when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
  });

  it('should throw an error for invalid type', () => {
    assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid type/);
  });
});
