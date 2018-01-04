const client = require('./elastic.js');
const faker = require('faker');

function addDocument() {
  const videoId = faker.random.alphaNumeric();
  const imageUrl = faker.random.image();
  const title = faker.random.words();
  const length = faker.random.number();
  const description = faker.lorem.paragraph();
  const viewCount = faker.random.number();
  const creator = faker.name.findName();
  const creation = faker.date.past();
  const verified = faker.random.boolean();

  return client.index({
    index: 'videos',
    type: 'document',
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
    },
  });
}

const add = (count) => {
  for (let i = 0; i < 200; i += 1) {
    addDocument();
    if (count === 0) {
      return;
    }
    if (i === 199) {
      addDocument().then(() => {
        add(count - 200);
      });
    }
  }
};

add(10000000);
