const should = require("chai").should();
const server = require("../app/server.js");
const client = require("../app/elastic.js");
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:3000");

describe("Video Like Endpoint Tests", function() {
  it("should return a 200 response when a patch request is sent to the /videos/:video_id", function(done) {
    supertest(server)
      .patch("/video/videoId")
      .expect(200, done);
  });

  it("should return a 404 response when a get request is sent to the /videos/:video_id endpoint", function(done) {
    supertest(server)
      .get("/video/videoId")
      .expect(404, done);
  });

  it('should return a 404 a post request is sent to the /video/:videoId enpoint', function(done) {
    supertest(server)
      .post('/video/videoId')
      .expect(404, done);
  })

});
