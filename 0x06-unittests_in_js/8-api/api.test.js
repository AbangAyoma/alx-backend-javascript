const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  let server;
  before((done) => {
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(() => done()); 
  });

  it('should return the correct status code (200)', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should respond to GET requests only', (done) => {
    request.post(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
