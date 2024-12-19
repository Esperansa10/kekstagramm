// import {Photos} from './util.mjs';
import {Photos} from './utilfetch.mjs';
//взяли шаблон
let templatePictures = document.querySelector('#picture').content.querySelector('.picture');
let container = document.querySelector('.pictures');
//создаем Фрагмент
let prewiesFragment = document.createDocumentFragment() ;

// переменные для наполнения photoitem
let photoitem;
let imagesrc;
let imagecomments;
let imagelikes;

// подтягивает контент в шаблон:
const createrPreview = () => {
  Photos.forEach((photo) => {
    CreateDom();
    imagesrc.src = photo.url;
    imagecomments.textContent = photo.comments.message.length;
    imagelikes.textContent = photo.likes;
    prewiesFragment.appendChild(photoitem);

});
};

// создаем дом элементы и добавляем их в контейнер
const CreateDom = () => {
  photoitem = templatePictures.cloneNode(true);
  imagesrc = photoitem.querySelector('.picture__img');
  imagecomments = photoitem.querySelector('.picture__comments');
  imagelikes = photoitem.querySelector('.picture__likes');
}

// наполняем дом контентом
createrPreview();
// загрузили в контейнер из фрагмента
container.appendChild(prewiesFragment);

export {container};
