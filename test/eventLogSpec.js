const should = require('chai').should();
const server = require('../app/server.js');
const client = require('../app/elastic.js');
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

describe('Event Log Enpoint Tests', () => {

  it('should return a 404 for get reguests to the /video:video_id/log endpoint', (done) => {
    supertest(server)
      .get('/video/videoId/play')
      .expect(404, done)
  })

})