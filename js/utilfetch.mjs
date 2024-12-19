import {arrComments, arrNames} from './data.mjs';

const createFetch = (onSuccess, onError) => () => {
  return fetch(
    'https://23.javascript.htmlacademy.pro/kekstagram/data',
    // '/test.json',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

let Photos;
const obrab = () => { createFetch(
  (json) => {
    Photos = json;
    // return json;
  },
  (err) => {
    console.log(err);
  })};

obrab();

// задача вывести json в переменную photos

console.log(Photos);

export {Photos};
