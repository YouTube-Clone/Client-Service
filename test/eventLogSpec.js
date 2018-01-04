const server = require('../app/server.js');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('Event Log Enpoint Tests', () => {
  it('should return a 404 for get reguests to the /video/:video_id/log endpoint', (done) => {
    supertest(server)
      .get('/videos/videoId/log')
      .expect(404, done);
  });

  it('Should return a 200 for a post request sent to the /video/video_id/log endpoint', (done) => {
    supertest(server)
      .post('/videos/videoId/log')
      .expect(200, done);
  });

  it('Should return a 404 for a patch request sent to the /video/video_id/log endpoint', (done) => {
    supertest(server)
      .patch('/videos/videoId/log')
      .expect(404, done);
  });
})