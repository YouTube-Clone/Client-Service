const client = require("./elastic.js");

const search = (query, callback) => {
  return client.search({
  q: query
    })
    .then(
      function(body) {
        callback(body)
      },
      function(error) {
        console.trace(error.message);
      }
    );
}

module.exports = search;
