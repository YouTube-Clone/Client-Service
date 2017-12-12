const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const server = app.listen(PORT, HOST);

app.get("/", (request, response) => {
  response.send("Get request to `/` received.");
});

module.exports = server;  