const server = require('../app/server.js');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('Video Like Endpoint Tests', () => {
  it('Should return a 200 response when a patch request is sent to the /videos/:video_id', (done) => {
    supertest(server)
      .patch('/video/videoId')
      .expect(200, done);
  });

  it('Should return a 404 response when a get request is sent to the /videos/:video_id endpoint', (done) => {
    supertest(server)
      .get('/video/videoId')
      .expect(404, done);
  });

  it('Should return a 404 a post request is sent to the /video/:videoId enpoint', (done) => {
    supertest(server)
      .post('/video/videoId')
      .expect(404, done);
  });
});
