const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace"
});

function indexExists() {
  return client.indices.exists({
    index: "videos"
  });
}

const deleteIndex = () => {
  return client.indices.delete({
    index: 'videos'
  });
}

const initIndex = () => {
  return client.indices.create({
    index: 'videos'
  });
};

function initMapping() {
  return client.indices.putMapping({
    index: "videos",
    type: "document",
    body: {
      properties: {
        title: { type: "text" },
      }
    }
  });
}

const init = () => {
  indexExists().then( (exists) => {
    if (exists) {
      return deleteIndex();
    }
  }).then( (err) => {
    if(err) {console.log(err);}
    return initIndex().then(initMapping).then( () => {
    
    })
  })
}

init();

module.exports = init;