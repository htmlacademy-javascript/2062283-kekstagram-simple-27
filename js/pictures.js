const picturesContainer = document.querySelector('.pictures');

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderUserPics = (data) => {

  for (let i = 0; i < data.length; i++) {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);

    const elementLink = thumbnailElement.querySelector('.picture__img');
    elementLink.src = data[i].url;

    const elementLikes = thumbnailElement.querySelector('.picture__likes');
    elementLikes.textContent = data[i].likes;

    const elementComments = thumbnailElement.querySelector('.picture__comments');
    elementComments.textContent = data[i].comments;


    fragment.appendChild(thumbnailElement);
  }

  picturesContainer.appendChild(fragment);

};

export {renderUserPics};

