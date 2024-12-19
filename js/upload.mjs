let upload = document.querySelector('#upload-file');
let formupload = document.querySelector('.img-upload__overlay');
let body = document.querySelector('body');
let cross = document.querySelector('#upload-cancel');
let buttonSmaller = document.querySelector('.scale__control--smaller');
let buttonBigger = document.querySelector('.scale__control--bigger');
let scaleImage = document.querySelector('.scale__control--value');
let scaleImagePicture = document.querySelector('.img-upload__preview > img');
let scaleStep = 1;


//открываем форму загрузки
upload.addEventListener('click',  () => {

  formupload.classList.remove('hidden');
  body.classList.add('modal-open');
});

//закрываем форму загрузки
cross.addEventListener('click', () => {
  formupload.classList.add('hidden');
  body.classList.remove('modal-open');
});

//уменьшаем изображение
buttonSmaller.addEventListener('click', () => {
  let scapeInt = parseInt(scaleImage.value);
  if (scapeInt - 25 > 0 ) {
  scaleImage.value = scapeInt - 25 + '%';
  scaleStep = scaleStep - 0.25;
    scaleImagePicture.style = 'transform: scale( ' + scaleStep + ')';
  }
  else { scaleImage.value = 0 + '%'; }
});

//увеличиваем изображение
buttonBigger.addEventListener('click', () => {
  let scapeInt = parseInt(scaleImage.value);
  if (scapeInt + 25 <= 100 ) {
    scaleImage.value = scapeInt + 25 + '%';
    scaleStep = scaleStep + 0.25;
    scaleImagePicture.style = 'transform: scale( ' + scaleStep + ')';
  }
  else { scaleImage.value = 100 + '%'; }
});

//размеры
buttonSmaller.addEventListener('click', () => {
  let scapeInt = parseInt(scaleImage.value);
  if (scapeInt - 25 > 0 ) {
    scaleImage.value = scapeInt - 25 + '%';
    scaleStep = scaleStep - 0.25;
    scaleImagePicture.style = 'transform: scale( ' + scaleStep + ')';
  }
  else { scaleImage.value = 0 + '%'; }
});
// слайдер
let sliderElement = document.querySelector('.effect-level__slider');

const slider = () => {
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
}) ;

};

// фильтры
let allLi = document.querySelectorAll('.effects__item');
let picture = document.querySelector('.img-upload__preview');


let lastfilter = 'effects__preview--none';
allLi.forEach((li) => {
  li.addEventListener('click', ()=>{

    let input = li.querySelector('.effects__radio');
    //нужно в зависимости от input.value  добавлять класс picture

    if (input.value === 'none') {
      sliderElement.noUiSlider.destroy();
      picture.classList.remove(lastfilter);
      picture.classList.add('effects__preview--none');
      lastfilter = 'effects__preview--none';
    }
    if (input.value === 'chrome') {
      slider();
      picture.classList.remove(lastfilter);
      picture.classList.add('effects__preview--chrome');
      lastfilter = 'effects__preview--chrome';
    }
    if (input.value === 'sepia') {
      slider();
      picture.classList.remove(lastfilter);
    picture.classList.add('effects__preview--sepia');
      lastfilter = 'effects__preview--sepia';
    }
    if (input.value === 'marvin') {
      slider();
      picture.classList.remove(lastfilter);
      picture.classList.add('effects__preview--marvin');
      lastfilter = 'effects__preview--marvin';
    }
    if (input.value === 'phobos') {
      slider();
      picture.classList.remove(lastfilter);
      picture.classList.add('effects__preview--phobos');
      lastfilter = 'effects__preview--phobos';
    }
    if (input.value === 'heat') {
      slider();
      picture.classList.remove(lastfilter);
      picture.classList.add('effects__preview--heat');
      lastfilter = 'effects__preview--heat';
    }
  });
});

// валидация формы



