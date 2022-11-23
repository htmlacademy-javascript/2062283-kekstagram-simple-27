const picturesContainer = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderUserPics = (data) => {

  for (let i = 0; i < data.length; i++) {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);
    const elementLink = thumbnailElement.querySelector('.picture__img');
    const elementLikes = thumbnailElement.querySelector('.picture__likes');
    const elementComments = thumbnailElement.querySelector('.picture__comments');

    elementLink.src = data[i].url;
    elementLikes.textContent = data[i].likes;
    elementComments.textContent = data[i].comments;
    fragment.appendChild(thumbnailElement);
  }

  picturesContainer.appendChild(fragment);

};

export {renderUserPics};

