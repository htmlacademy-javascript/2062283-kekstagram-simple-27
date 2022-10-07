// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

function getRandomIntInclusive(min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}
getRandomIntInclusive(2, 7);

// Функция для проверки максимальной длины строки

function verifyMaxCommentLength (lineLength, maxLength) {
  return (lineLength <= maxLength);
}
verifyMaxCommentLength (25, 135);
