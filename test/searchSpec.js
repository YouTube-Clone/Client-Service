const should = require('chai').should();
const server = require('../app/server.js');
const client = require("../app/elastic.js");
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

describe('Video Search Endpoint Tests', () => {

  it('should return a 404 response when a post request is sent to the /videos/search endpoint', function(done) {
    supertest(server)
      .post('/videos/search?query=param')
      .expect(404, done);
  })

  it("should return a 404 response when a patch request is sent to the /videos/search endpoint", function(done) {
    supertest(server)
      .patch("/videos/search")
      .expect(404, done);
  });

  // doesn't work unless server elastic server is running
  // it('should return a 200 response when a get request is sent to the /videos/search enpoint', function(done) {
  //   supertest(server)
  //     .get('/videos/search', done)
  //     // .query({ query: 'soap' })
  //     .expect(200, done);
  // });
});

