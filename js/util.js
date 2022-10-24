function verifyMaxCommentLength (lineLength, maxLength) {
  return (lineLength <= maxLength);
}
verifyMaxCommentLength (25, 135);

function getRandomIntInclusive(min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

const getRandomElementOfArray = (someArray) => someArray[getRandomIntInclusive(0, someArray.length - 1)];

export {getRandomElementOfArray};
