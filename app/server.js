const express = require('express');
const elastic = require('./elastic.js');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const server = app.listen(PORT, HOST);

app.get('videos/:video_id', (requuest, responce) => {
  // get videos from video database when play
  responce.send('video from databse');
});

app.get('/videos/search', (request, responce) => {
  //searches for video in cache
  responce.send("query results");
})

app.post('/videos/:video_id?type=update', (request, responce) => {
  //logs event
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

// POST: /videos/:video_id?type=update

