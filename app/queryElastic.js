const client = require("./elastic.js");

const search = () => {
  return client.search({
  q: "soap"
    })
    .then(
      function(body) {
        console.log(body, 'body ');
      },
      function(error) {
        console.trace(error.message);
      }
    );
}

search();
