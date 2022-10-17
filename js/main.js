
// Функция для проверки максимальной длины строки

function verifyMaxCommentLength (lineLength, maxLength) {
  return (lineLength <= maxLength);
}
verifyMaxCommentLength (25, 135);


/* Необходимо написать функции для создания массива из 25 сгенерированных объектов.
Каждый объект массива — описание фотографии, опубликованной пользователем.
Объект состоит из 5 ключей:

1. id, число - идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
2. url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
3. description, строка — описание фотографии. Описание придумайте самостоятельно.
4. likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
5. comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.
*/

function getRandomIntInclusive(min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

const photoLikes = [];
for (let i = 15; i <= 200; i++) {
  photoLikes.push(i);
}

const photoComments = [];
for (let i = 0; i <= 200; i++) {
  photoComments.push(i);
}

const getRandomArrayElements = (element) => element
  [getRandomIntInclusive(0, element.length - 1)];

function createPhotoDescription(id) {
  console.log();
  return {
    id: id,
    likes: getRandomArrayElements(photoLikes),
    comments: getRandomArrayElements(photoComments),
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`
  };
}

const restPhotos = [];
for (let j = 0; j < 25; j++) {
  restPhotos.push(createPhotoDescription(j));
}


const createPhotoDescription2 = (l1, l2) => {
  console.log();
  return {
    id: l2 + 1,
    likes: getRandomArrayElements(photoLikes),
    comments: getRandomArrayElements(photoComments),
    url: `photos/${l2 + 1}.jpg`,
    description: `Описание фотографии ${l2 + 1}`
  };
};

const restPhotos2 = Array.from({length: 25}, createPhotoDescription2);
console.log(restPhotos2[0]);

// const restPhotos3 = restPhotos2.map(createPhotoDescription2);
// console.log(restPhotos3[0]);


