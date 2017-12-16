const client = require("./elastic.js");
const faker = require('faker');

function addDocument() {
  let id = faker.random.alphaNumeric();
  let image = faker.random.image();
  let videoTitle = faker.random.words();
  let length = faker.random.number();
  let description = faker.lorem.paragraph();  
  let viewCount = faker.random.number();
  let name = faker.name.findName();
  let created = faker.date.past();
  let verify = faker.random.boolean();


  return client.index({
    index: 'videos',
    type: "document" ,
    body: {
      videoId: id,
      imageUrl: image,
      title: videoTitle, 
      length: length,
      description: description,
      viewCount: viewCount,
      creator: name,
      creation: created,
      verified: verify,

    }
  });
}

let count = 10000000;

const add = function(count) {
  for(let i = 0; i < 200; i++) {
    addDocument();
    count--;
    console.log(count);
    if (count === 0) {
      return;
    }
    if (i === 199) {
      addDocument().then( () => {
        count--;
        console.log(count);
        add(count);
      })
    }
  }
}

add(count);