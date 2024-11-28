const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy for Utils.calculateNumber
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the spy after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called once
    expect(spy.calledOnce).to.be.true;

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct total
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    // Restore console.log
    consoleSpy.restore();
  });
});
