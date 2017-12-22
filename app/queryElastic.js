const client = require("./elastic.js");

const search = (query, callback) => {
  return client.search({
  index: 'videos',
  type: 'document',
  body:{
    query: {
      match: {"title": query}
    },
  }
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

const query = function(count) {
  for (let i = 0; i < 200; i++) {
    search('cats');
    count--;
    console.log(count);
    if (count === 0) {
      return;
    }
    if (i === 199) {
      search().then(() => {
        count--;
        console.log(count);
        query(count);
      });
    }
  }
};


module.exports = search;
