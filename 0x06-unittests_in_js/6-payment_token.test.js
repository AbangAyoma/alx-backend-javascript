const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();  
      })
      .catch(err => done(err));  
  });

  it.skip('should do nothing when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        assert.strictEqual(response, undefined);  
        done();
      })
      .catch(err => done(err)); 
  });
});
