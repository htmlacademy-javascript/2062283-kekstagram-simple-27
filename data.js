import {getRandomElementOfArray} from './util.js';

const photoLikes = [];
for (let i = 15; i <= 200; i++) {
  photoLikes.push(i);
}

const photoComments = [];
for (let i = 0; i <= 200; i++) {
  photoComments.push(i);
}

function createPhotoDescription(id) {
  return {
    id: id,
    likes: getRandomElementOfArray(photoLikes),
    comments: getRandomElementOfArray(photoComments),
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`
  };
}

const restPhotos = [];
for (let j = 0; j < 25; j++) {
  restPhotos.push(createPhotoDescription(j));
}

console.log(restPhotos);

// const createPhotoDescription2 = (l1, l2) => {
//   console.log();
//   return {
//     id: l2 + 1,
//     likes: getRandomArrayElements(photoLikes),
//     comments: getRandomArrayElements(photoComments),
//     url: `photos/${l2 + 1}.jpg`,
//     description: `Описание фотографии ${l2 + 1}`
//   };
// };

// const restPhotos2 = Array.from({length: 25}, createPhotoDescription2);
// console.log(restPhotos2[0]);

// const restPhotos3 = restPhotos2.map(createPhotoDescription2);
// console.log(restPhotos3[0]);


