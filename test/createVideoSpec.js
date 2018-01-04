const server = require('../app/server.js');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('Video Creation Endpoint Tests', () => {
  it('should return a 200 response when a post request is sent to the /videos', (done) => {
    supertest(server)
      .post('/videos')
      .expect(200, done);
  });

  it('should return a 404 response when a get request is sent to the /videos endpoint', (done) => {
    supertest(server)
      .get('/videos')
      .expect(404, done);
  });

  it('should return a 404 responce when a patch request is sent to the /videos endpoint', (done) => {
    supertest(server)
      .patch('/videos')
      .expect(404, done);
  });
});
