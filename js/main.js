function randomInteger(minParam, maxParam) {
  let min = minParam;
  let max = maxParam;

  if (min < 0 || max < 0) {
    return NaN;
  }

  if (max < min) {
    const swap = min;
    min = max;
    max = swap;
  }

  return Math.round(Math.random() * (max - min) + min);
}

function isValidString(checkingString, maxLength) {
  return checkingString.length <= maxLength;
}

function generatePostedPhotos() {
  const postedPhotos = [];

  for (let i = 0; i < 25; i++) {
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

generatePostedPhotos();
randomInteger(10, 5);
isValidString('World is beautiful', 50);


