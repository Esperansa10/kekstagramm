import {arrComments, arrNames} from './data.mjs';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// console.log (getRandomInt(3,6));

function checkLengthSting (checkString, maxString) {
  let result = true;
  if (checkString > maxString) {
    return result =  false;
  }
  return result;
}
// console.log (checkLengthSting (6, 5));

function createArrays(count) {
  let result = [];

  for (let i = 0; i < count; i++) {

    result.push( {
      id: i+1,
      url: 'photos/' + (i+1) + '.jpg',
      description: 'Описание фотографии ' + (i+1),
      likes: getRandomInt(15,200),
      comments:
        {
          id: i+1,
          avatar: 'img/avatar-' + getRandomInt(1,6) +'.svg',
          message: arrComments[getRandomInt(1, arrComments.length-1)],
          name:   arrNames[getRandomInt(1, arrNames.length-1)]
        }
    } ) ;

  };

  return result;
};
let Photos = createArrays(25);

export {Photos};
