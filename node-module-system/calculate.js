import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const number1 = Number(process.argv[2]);
const operator = process.argv[3];
const number2 = Number(process.argv[4]);

if (isNaN(number1)) {
  console.log('invalid argument:', process.argv[2]);
} else if (isNaN(number2)) {
  console.log('invalid argument:', process.argv[4]);
} else {
  switch (operator) {
    case 'plus':
      console.log('result: ', add(number1, number2));
      break;
    case 'minus':
      console.log('result: ', subtract(number1, number2));
      break;
    case 'times':
      console.log('result: ', multiply(number1, number2));
      break;
    case 'over':
      console.log('result: ', divide(number1, number2));
      break;
    default:
      console.log('error: please provide valid operator (plus, subtract, times, divide');
  }
}
