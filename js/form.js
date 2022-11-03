// import {isEscapeKey} from './util.js';
const imageForm = document.querySelector('.img-upload__form');
const uploadImage = document.querySelector('#upload-file');
const modalForm = document.querySelector('.img-upload__overlay');
const cancelUpload = document.querySelector('#upload-cancel');

const onModalEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalForm.classList.add('hidden');
  }
};

uploadImage.addEventListener('click', () => {
  modalForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener ('keydown', (onModalEscKeyDown));
});

cancelUpload.addEventListener('click', () => {
  modalForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', (onModalEscKeyDown));
  imageForm.reset();
});

