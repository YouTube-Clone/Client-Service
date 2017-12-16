const express = require('express');
const elastic = require('./elastic.js');
const search = require('./queryElastic.js')
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const server = app.listen(PORT, HOST);

// get videos from video database when play
app.get('videos/:video_id', (request, responce) => {
  responce.send('video from databse');
});

//searches for video in cache and sends back videos
app.get('/videos/search', (request, responce) => {
  search(request.query.query, (results) => {
    responce.send(results.hits.hits);
  })
})

//logs event
app.post('/videos/:video_id?type=update', (request, responce) => {
  responce.send('event log updated');
});

app.post('/videos', (request, responce) => {
  //add a video to cache and databse
  responce.send('video added to database');
})

app.patch('/videos/:video_id?type=like', (request, responce) => {
  //update the like value in cache and in db
  responce.send('like or dislike count updated');
});

module.exports = server;  