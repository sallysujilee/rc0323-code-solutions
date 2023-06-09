import takeAChance from './take-a-chance.js';

const promise = takeAChance('Sally');
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });
