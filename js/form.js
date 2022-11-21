import {successMessage} from './success.js';
import {errorMessage} from './error.js';

const imageForm = document.querySelector('.img-upload__form');
const uploadImage = document.querySelector('#upload-file');
const modalForm = document.querySelector('.img-upload__overlay');
const cancelUpload = document.querySelector('#upload-cancel');
const scaleValue = document.querySelector('.scale__control--value');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaledImageContainer = document.querySelector('.img-upload__preview');
const scaledImage = scaledImageContainer.querySelector('img');
const effects = document.querySelectorAll('.effects__radio');
const noEffect = document.querySelector('.effects__radio');


let newValue = 100;

const onModalEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalForm.classList.add('hidden');
    scaledImage.className = 'effects__preview--none';
    scaleValue.value = '100%';
    scaledImage.style.transform = `scale(${scaleValue.value})`;
    document.querySelector('.text__description').value = '';
  }
};

const onScaleDown = () => {
  if (newValue >= 50) {
    newValue = newValue - 25;
    scaledImage.style.transform = `scale(${newValue / 100})`;
    scaleValue.value = `${newValue}%`;
  }
};

const onScaleUp = () => {
  if (newValue <= 75) {
    newValue = newValue + 25;
    scaleValue.value = `${newValue}%`;
    scaledImage.style.transform = `scale(${newValue / 100})`;
  }
};

uploadImage.addEventListener('click', () => {
  modalForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  noEffect.checked = true;
  scaleValue.value = '100%';
  document.addEventListener ('keydown', (onModalEscKeyDown));
  scaleDownButton.addEventListener('click', (onScaleDown));
  scaleUpButton.addEventListener('click', (onScaleUp));
  scaledImage.classList.add('effects__preview--none');

  for (const effect of effects) {
    effect.onchange = () => {
      scaledImage.className = `effects__preview--${effect.value}`;
    };
  }
});

imageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        scaledImage.className = 'effects__preview--none';
        scaleValue.value = '100%';
        scaledImage.style.transform = `scale(${scaleValue.value})`;
        evt.target.reset();
        modalForm.classList.add('hidden');
        successMessage.classList.remove('hidden');

      } else {
        errorMessage.classList.remove('hidden');
      }
    });
});

cancelUpload.addEventListener('click', () => {
  scaledImage.className = 'effects__preview--none';
  scaleValue.value = '100%';
  scaledImage.style.transform = `scale(${scaleValue.value})`;
  modalForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', (onModalEscKeyDown));
});


