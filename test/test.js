var should = require('chai').should();
expect = require('chai').expect;
supertest = require('supertest');
api = supertest('http://localhost:8080');

describe('Event', function() {
  it('should return a 200 responce', function(done) {
    api.get('/')
      .set('Accept', 'application/json/')
      .expect(200, done);
  })
});