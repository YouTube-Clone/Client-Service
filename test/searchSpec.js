const server = require('../app/server.js');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('Video Search Endpoint Tests', () => {
  it('should return a 404 response when a post request is sent to the /videos/search endpoint', (done) => {
    supertest(server)
      .post('/videos/search?query=param')
      .expect(404, done);
  });

  it('should return a 404 response when a patch request is sent to the /videos/search endpoint', (done) => {
    supertest(server)
      .patch('/videos/search')
      .expect(404, done);
  });
});

