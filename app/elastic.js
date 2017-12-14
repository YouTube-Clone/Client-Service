const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

const indexName = 'videos'

function initIndex() {
    return client.indices.create({
    index: indexName
  });
};

function initMapping() {
  return client.indices.putMapping({
    index: indexName,
    type: 'document',
    body: {
      properties: {
        url: {type: 'string'},
      }
    }
  })
}

function addDocument(document) {
  return client.index({
    index: indexName,
    type: 'document',
    body: {
      title:document.title,
    }
  })
}

// initIndex().then( (results) => {
//   console.log(results);
// })

addDocument({title: 'test2'}).then( (results) => {
  console.log(results);
});

client.ping(
  {requestTimeout: 30000},
  function(error) {
    if (error) {
      console.error("elasticsearch cluster is down!");
    } else {
      console.log("Elastic search connection is running.");
    }
  }
);







module.exports = client;