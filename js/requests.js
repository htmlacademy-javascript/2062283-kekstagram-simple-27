import {renderUserPics} from './pictures.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }

    else {
      document.querySelector('.error-text').classList.remove('hidden');
    }
  })
  .then((response) => response.json())
  .then((pictures) => {
    document.querySelector('.error-text').classList.add('hidden');
    renderUserPics(pictures);
  });
