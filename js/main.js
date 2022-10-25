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
  return checkingString.length < maxLength;
}
randomInteger(10, 5);
isValidString('World is beautiful', 50);

