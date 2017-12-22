var apm = require("elastic-apm-node").start({
  appName: "YouTube",
});
const express = require('express');
const elastic = require('./elastic.js');
const search = require('./queryElastic.js')
const requester = require('request'); 
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(apm.middleware.express());

const server = app.listen(PORT, HOST);

// get videos from video database when play
app.get('/videos/:video_id/play', (request, response) => {
  requester({
    uri: "video service url + request.params.video_id",
    method: 'GET'
  }, function(error, request, body) {
      response.send(body)
    }
  )
});

//searches for video in cache and sends back videos
app.get('/videos/search', (request, response) => {
  search(request.query.query, (results) => {
    response.send(results.hits.hits);
  })
})

//logs event
app.post('/videos/:video_id/log', (request, response) => { 
  requester(
    {
      uri: "log video endpoint",
      method: "post",
      body: {
        cookie: "a;sdfk;sldkf", //request cookie goes here
        date: "12/8/2017 11:09 am", //request date goes here
        action: "play" //request action goes here
      },
    },
    (error, request, body) => {
      response.send("event log updated");
    }
  );
});

app.post('/videos', (request, response) => {
  requester(
    {
      uri: "video post database", //real enpoint here
      method: "POST",
      body: {
        title: "test", //request title goes here
        creator: "blah", // request creator goes here
        video: "ikr" //actual video goes here
      }
    },
    (error, request, body) => {
      response.send("video added to database");
    }
  );
})

app.patch('/videos/:video_id', (request, response) => {
  requester(
    {
      uri: "video endpoint", //real endpoint here
      method: "patch",
      body: {
        video_id: "lsakdjf", //request id here
        action: "increase or decrease" //request action here
      }
    },
    (error, request, body) => {
      response.send("like or dislike count updated");
    }
  );
});

module.exports = server;  