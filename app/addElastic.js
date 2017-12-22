const client = require("./elastic.js");
const faker = require('faker');

function addDocument() {
  let videoId = faker.random.alphaNumeric();
  let imageUrl = faker.random.image();
  let title = faker.random.words();
  let length = faker.random.number();
  let description = faker.lorem.paragraph();  
  let viewCount = faker.random.number();
  let creator = faker.name.findName();
  let creation = faker.date.past();
  let verified = faker.random.boolean();


  return client.index({
    index: 'videos',
    type: "document" ,
    body: {
      videoId,
      imageUrl,
      title, 
      length,
      description,
      viewCount,
      creator,
      creation,
      verified,

    }
  });
}


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

add(10000000);