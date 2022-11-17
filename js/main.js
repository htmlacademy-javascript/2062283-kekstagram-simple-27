import './data.js';
import './util.js';
import './pictures.js';
import './form.js';
import {renderUserPics} from './pictures.js';
import './success.js';
import './error.js';

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
