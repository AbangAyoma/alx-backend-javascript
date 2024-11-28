const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum when type is SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
  });

  it('should return the difference when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(4);
  });

  it('should return the division result when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
    expect(calculateNumber('DIVIDE', 5.5, 2.3)).to.be.closeTo(3, 0.001);
  });

  it('should return Error when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal ('Error');
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });

  it('should throw an error for invalid type', () => {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw();
  });
});
