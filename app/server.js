// var apm = require('elastic-apm-node').start({
//   appName: 'YouTube',
// });
const express = require('express');
const elastic = require('./elastic.js');
const search = require('./queryElastic.js');
const requester = require('request'); 
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// app.use(apm.middleware.express());
app.use(bodyParser.json());

const server = app.listen(PORT, HOST);

app.get('/videos/:video_id/play', (request, response) => {
  requester({
    uri: 'videos/request.params.video_id',
    method: 'GET',
  }, (error, request, body) => {
      response.send(body);
    }
  )
});

app.get('/videos/search', (request, response) => {
  search(request.query.query, (results) => {
    response.send(results.hits.hits);
  })
});

//logs event
app.post('/videos/:video_id/log', (request, response) => { 
  requester({
    uri: `/video/${request.params.video_id}/log_event`,
    method: 'POST',
    body: {
      cookie: request.cookie, 
      date: request.body.time, 
      action: request.body.action,
      ad: request.body.ad, 
    },
  }, (error, request, body) => {
      response.send('event log updated');
    }
  );
});

app.post('/videos', (request, response) => {
  requester(
    {
      uri: 'video post database', //real enpoint here
      method: 'POST',
      body: {
        title: 'test', //request title goes here
        creator: 'blah', // request creator goes here
        video: 'ikr' //actual video goes here
      }
    },
    (error, request, body) => {
      response.send('video added to database');
    }
  );
})

app.patch('/video/:video_id', (request, response) => {
  requester(
    {
      uri: 'video endpoint', //real endpoint here
      method: 'patch',
      body: {
        video_id: 'lsakdjf', //request id here
        action: 'increase or decrease' //request action here
      }
    },
    (error, request, body) => {
      response.send('like or dislike count updated');
    }
  );
});

module.exports = server;  