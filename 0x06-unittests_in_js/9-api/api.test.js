const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  let server;
  before((done) => {
    server = require('./api'); // Start the server
    done();
  });

  after((done) => {
    server.close(() => done()); // Close the server after tests
  });

  it('should return the correct status code (200) for the index route', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for the index route', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return the correct status code (200) for a valid cart ID', (done) => {
    request.get(`${baseUrl}/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for a valid cart ID', (done) => {
    request.get(`${baseUrl}/12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for an invalid cart ID', (done) => {
    request.get(`${baseUrl}/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 404 when cart ID is missing', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
