const should = require('chai').should();
const server = require('../app/server.js')
const client = require("../app/elastic.js");
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:8080');

describe('Server Tests', function() {

  it('should return a 404 response when a get request is sent to / endpoint', function(done) {
    supertest(server)
      .get('/')
      .expect(404, done);
  })

  it('should return a 200 response when a post request is sent to the /videos', function(done) {
    supertest(server)
      .post('/videos')
      .expect(200, done);
  })

  it('should return a 404 response when a get request is sent to the /videos endpoint', function(done) {
    supertest(server)
      .get('/videos')
      .expect(404, done);
  })

  // it('should return a 200 response when a get request is sent to the /videos/search enpoint', function(done) {
  //   supertest(server)
  //     .get('/videos/search', done)
  //     .query({ query: 'soap' })
  //     .expect(200, done);
  // });
});

after(function(done){
  server.close(done);
  client.close(done);
})
