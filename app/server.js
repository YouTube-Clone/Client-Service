const express = require('express');
// const elastic = require('./elastic.js');
// const search = require('./queryElastic.js');
const requester = require('request'); 
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

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
  requester({
    uri: '/videos',
    method: 'POST',
    body: {
      title: request.body.title, 
      creator: request.body.creator,
      video: request.body.video, 
    }
  },(error, request, body) => {
      response.send('video added to database');
    }
  );
})

app.patch('/video/:video_id', (request, response) => {
  requester({
    uri: `/video/${request.params.video_id}`,
    method: 'PATCH',
    body: {
      action: request.body.action,
    }
  },(error, request, body) => {
      response.send('video updated');
    }
  );
});

module.exports = server;  