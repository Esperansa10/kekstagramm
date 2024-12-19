// import {Photos} from './util.mjs';
// import {Photos} from './utilfetch.mjs';

let bigPicture = document.querySelector('.big-picture');
let pictures = document.querySelectorAll('.picture');
let bigpicture_img = bigPicture.querySelector('.big-picture__img > img');
let bigpicture_likes = bigPicture.querySelector('.likes-count');
let bigpicture_comments_count = bigPicture.querySelector('.comments-count');
let bigpicture_comment  = bigPicture.querySelector('.social__comment');
let bigpicture_comment_text =  bigpicture_comment.querySelector('.social__text');
let body = document.querySelector('body');

const clickPicture = () => {

  pictures.forEach((picture) => {

    picture.addEventListener('click', function () {

      bigPicture.classList.remove('hidden');
      // Замена picture
      let picture_img = picture.querySelector('.picture__img');
      bigpicture_img.src = picture_img.src;

      // замена лайков
      let picture_likes = picture.querySelector('.picture__likes');
      bigpicture_likes.textContent = picture_likes.textContent;

      // замена количетва комментариев
      let picture_comments = picture.querySelector('.picture__comments');
      bigpicture_comments_count.textContent = picture_comments.textContent;

      // замена комментариев
       let comments_text = document.querySelectorAll('.social__text');
      //замена дескриптион
      let desctription = document.querySelector('.social__caption');
      let social_picture = document.querySelectorAll('.social__picture');
      console.log('hi');
       for (let i = 0; i < comments_text.length; i++ ) {


         comments_text[i].textContent = Photos[i].comments.message;
         social_picture[i].src = Photos[i].comments.avatar;
         social_picture[i].alt = Photos[i].comments.name;
         desctription.textContent = Photos[i].description;  //1
       }

       // пока прячем
      let countComments = document.querySelector('.social__comment-count');let commnetLoader = document.querySelector('.comments-loader');
      countComments.classList.add('hidden');
      commnetLoader.classList.add('hidden');
      //

      body.classList.add('modal-open');

    });
  });
};

 clickPicture();

let cross = document.querySelector('#picture-cancel');

document.addEventListener('keydown', function(evt){
   if(evt.keyCode === 27) {
     bigPicture.classList.add('hidden');
     body.classList.remove('modal-open');
   }
  });

cross.addEventListener('click', function() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

})
