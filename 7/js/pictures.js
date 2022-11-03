import {restPhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

for (let i = 0; i < restPhotos.length; i++) {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  const elementLink = thumbnailElement.querySelector('.picture__img');
  elementLink.src = restPhotos[i].url;

  const elementLikes = thumbnailElement.querySelector('.picture__likes');
  elementLikes.textContent = restPhotos[0].likes;

  const elementComments = thumbnailElement.querySelector('.picture__comments');
  elementComments.textContent = restPhotos[0].comments;


  fragment.appendChild(thumbnailElement);
}

picturesContainer.appendChild(fragment);
