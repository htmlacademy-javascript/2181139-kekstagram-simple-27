import {randomInteger} from './utils';

function generatePostedPhotos(amount) {
  const postedPhotos = [];

  for (let i = 0; i < amount; i++) {
    postedPhotos.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: 'My photo',
      likes: randomInteger(15, 200),
      comments: randomInteger(0, 200),
    });
  }

  return postedPhotos;
}

export {generatePostedPhotos};
