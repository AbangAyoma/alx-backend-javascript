const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(() => {
    // Stub the Utils.calculateNumber function
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with type SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called once
    expect(stub.calledOnce).to.be.true;

    // Verify the stub was called with the correct arguments
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
