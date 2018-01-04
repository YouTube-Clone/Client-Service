// const client = require('./elastic.js');

const search = (query, callback) => {
  return client.search({
    index: 'videos',
    type: 'document',
    body: {
      query: {
        match: { title: query },
      },
    },
  }).then((body) => {
    callback(body);
  }, (error) => {
    callback(error.message);
  });
};

module.exports = search;
