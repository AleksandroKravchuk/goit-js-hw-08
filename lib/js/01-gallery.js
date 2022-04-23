"use strict";

var _galleryItems = require("./gallery-items");

var _simplelightbox = _interopRequireDefault(require("simplelightbox"));

require("simplelightbox/dist/simple-lightbox.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add imports above this line
// Change code below this line
console.log(_galleryItems.galleryItems);
const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCards(_galleryItems.galleryItems);
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCards(galleryItems) {
  return galleryItems.map(_ref => {
    let {
      preview,
      original,
      description
    } = _ref;
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
  }).join('');
}

const gallery = new _simplelightbox.default('.gallery a');
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;