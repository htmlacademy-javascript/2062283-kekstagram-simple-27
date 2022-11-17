
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const successButton = successMessage.querySelector('.success__button');

const onSuccessEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    successMessage.classList.add('hidden');
  }
};

successMessage.classList.add('hidden');

document.body.append(successMessage);

successButton.addEventListener('click', () => {
  successMessage.classList.add('hidden');
});

document.addEventListener('keydown', (onSuccessEscKeyDown));

document.addEventListener('click', (evt) => {
  if (evt.target === successMessage) {
    successMessage.classList.add('hidden');
  }
});

export {successMessage};
export {onSuccessEscKeyDown};
