const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
const errorButton = errorMessage.querySelector('.error__button');

errorMessage.classList.add('hidden');

const onErrorEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    errorMessage.classList.add('hidden');
  }
};

document.body.append(errorMessage);

errorButton.addEventListener('click', () => {
  errorMessage.classList.add('hidden');
});

document.addEventListener('keydown', (onErrorEscKeyDown));

document.addEventListener('click', (evt) => {

  if (evt.target === errorMessage) {
    errorMessage.classList.add('hidden');
  }
});

export {errorMessage};
export {onErrorEscKeyDown};
