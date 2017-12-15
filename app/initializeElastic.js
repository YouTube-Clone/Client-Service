const client = require('./elastic.js');

function indexExists() {
  return client.indices.exists({
    index: 'videos'
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
    index: 'videos',
    type: 'document',
    body: {
      properties: {
        videoId: { type: 'text' },
        imageUrl: { type: 'text' }, 
        title: { type: 'text' },
        length: { type: 'integer' },
        description: {type: 'text' },
        viewCount: {type: 'integer'},
        creator: {type: 'text'},
        creation: {type: 'date' },
        verified: {type: 'text'},
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